import { expect, test } from '@playwright/test';
import {
  clickPaletteItem,
  getCreatedTiddlerState,
  getDraftCount,
  getDraftTitlesFor,
  getStoryList,
  openCommandPalette,
  paletteInputSelector,
  palettePanelSelector,
  seedBaseState,
  typeIntoPalette,
  waitForWiki,
} from './fixtures';

test.beforeEach(async ({ page }) => {
  await waitForWiki(page);
  await seedBaseState(page);
});

test('executes an action-string command from the application menu', async ({ page }) => {
  const input = await openCommandPalette(page, '$');
  await typeIntoPalette(input, '$Busqueda avanzada');

  await clickPaletteItem(page, 'Busqueda avanzada');

  await expect.poll(() => getStoryList(page)).toContain('$:/AdvancedSearch');
});

test('clicking the core empty-tiddler action only creates one draft', async ({ page }) => {
  const input = await openCommandPalette(page, '$');
  await typeIntoPalette(input, '$empty tiddler');

  await clickPaletteItem(page, 'create a new empty tiddler');

  await expect.poll(() => getDraftCount(page)).toBe(1);
});

test('creates a new tiddler through the command menu wizard', async ({ page }) => {
  const newTitle = `Playwright Nuevos articulos ${Date.now()}`;

  const input = await openCommandPalette(page, '$');
  await typeIntoPalette(input, '$Introduce un titulo');
  await clickPaletteItem(page, 'Crea una nueva entrada (ingresa un titulo）');

  await expect(page.locator(palettePanelSelector)).toContainText('Parametros del comando');
  await expect(page.locator(palettePanelSelector)).toContainText('Titulo de la entrada');

  const wizardInput = page.locator(paletteInputSelector);
  await typeIntoPalette(wizardInput, newTitle);
  const createItem = page.locator(palettePanelSelector).getByText(`Confirmar entrada: ${newTitle}`, { exact: true });
  await expect(createItem).toBeVisible();
  await createItem.click();

  await expect.poll(async () => {
    const state = await getCreatedTiddlerState(page, newTitle);
    return state.hasRealTiddler
      || state.drafts.length > 0
      || state.storyList.some((item: string) => item.includes(newTitle))
      || state.focused.includes(newTitle);
  }).toBe(true);

  await expect(page.locator(palettePanelSelector)).toHaveCount(0);
});

test('adds a tag through action-string autocomplete variable prompt', async ({ page }) => {
  const focusedTitle = `Playwright Fresh Note ${Date.now()}`;
  const newTag = `PlaywrightTag${Date.now()}`;
  const leakingTiddlerTitle = `Playwright Prompt Leak Candidate ${Date.now()}`;

  await page.evaluate(({ nextFocusedTitle, tagToAdd, leakingTitle }) => {
    const wikiWindow = window as unknown as { $tw: any };
    wikiWindow.$tw.wiki.addTiddler({
      title: nextFocusedTitle,
      text: 'This focused tiddler is used to verify action-variable prompt behavior.',
      tags: [],
    });
    wikiWindow.$tw.wiki.addTiddler({
      title: leakingTitle,
      text: `This text would leak into generic search results for ${tagToAdd} if prompt isolation breaks.`,
      tags: [tagToAdd],
    });
    wikiWindow.$tw.wiki.addTiddler({
      title: '$:/StoryList',
      list: [nextFocusedTitle],
    });
    wikiWindow.$tw.wiki.addTiddler({
      title: '$:/temp/focussedTiddler',
      text: nextFocusedTitle,
    });
  }, { nextFocusedTitle: focusedTitle, tagToAdd: newTag, leakingTitle: leakingTiddlerTitle });

  const input = await openCommandPalette(page, '$');
  await typeIntoPalette(input, '$Agrega una etiqueta a la entrada actual.');
  await clickPaletteItem(page, 'Agrega una etiqueta a la entrada actual.');

  await expect(page.locator(palettePanelSelector)).toContainText('Nueva pestana');

  const wizardInput = page.locator(paletteInputSelector);
  await typeIntoPalette(wizardInput, newTag);
  await expect(page.locator(palettePanelSelector)).not.toContainText(leakingTiddlerTitle);
  await clickPaletteItem(page, newTag);

  await expect.poll(() => page.evaluate(() => {
    const wikiWindow = window as unknown as { $tw: any };
    const focused = wikiWindow.$tw.wiki.getTiddlerText('$:/temp/focussedTiddler', '');
    const tags = wikiWindow.$tw.wiki.getTiddler(focused)?.fields.tags || [];
    return tags;
  })).toContain(newTag);

  await expect(page.locator(palettePanelSelector)).toHaveCount(0);
});

test('edits a specific tiddler through action-string variable prompt', async ({ page }) => {
  const targetTitle = `Playwright Edit Target ${Date.now()}`;

  await page.evaluate((tiddlerTitle) => {
    const wikiWindow = window as unknown as { $tw: any };
    wikiWindow.$tw.wiki.addTiddler({
      title: tiddlerTitle,
      text: 'This tiddler will be edited via command palette parameter.',
      tags: [],
    });
    wikiWindow.$tw.wiki.addTiddler({
      title: '$:/StoryList',
      list: [tiddlerTitle],
    });
    wikiWindow.$tw.wiki.addTiddler({
      title: '$:/temp/focussedTiddler',
      text: tiddlerTitle,
    });
  }, targetTitle);

  const input = await openCommandPalette(page, '$');
  await typeIntoPalette(input, '$Editar entrada');
  await clickPaletteItem(page, 'Editar');

  await expect(page.locator(palettePanelSelector)).toContainText('El elemento a editar');

  const wizardInput = page.locator(paletteInputSelector);
  await typeIntoPalette(wizardInput, targetTitle);
  await clickPaletteItem(page, `Confirmar entrada: ${targetTitle}`);

  await expect.poll(() => getDraftCount(page)).toBe(1);
  await expect.poll(() => getDraftTitlesFor(page, targetTitle)).toHaveLength(1);
});

test('deletes a specific tiddler through action-string variable prompt', async ({ page }) => {
  page.on('dialog', dialog => dialog.accept());

  const targetTitle = `Playwright Delete Target ${Date.now()}`;

  await page.evaluate((tiddlerTitle) => {
    const wikiWindow = window as unknown as { $tw: any };
    wikiWindow.$tw.wiki.addTiddler({
      title: tiddlerTitle,
      text: 'This tiddler will be deleted via command palette parameter.',
      tags: [],
    });
    wikiWindow.$tw.wiki.addTiddler({
      title: '$:/StoryList',
      list: [tiddlerTitle],
    });
    wikiWindow.$tw.wiki.addTiddler({
      title: '$:/temp/focussedTiddler',
      text: tiddlerTitle,
    });
  }, targetTitle);

  const input = await openCommandPalette(page, '$');
  await typeIntoPalette(input, '$Eliminar entrada');
  await clickPaletteItem(page, 'Eliminar');

  await expect(page.locator(palettePanelSelector)).toContainText('Elemento a eliminar');

  const wizardInput = page.locator(paletteInputSelector);
  await typeIntoPalette(wizardInput, targetTitle);
  await clickPaletteItem(page, `Confirmar entrada: ${targetTitle}`);

  await expect.poll(() => page.evaluate((expectedTitle) => {
    const wikiWindow = window as unknown as { $tw: any };
    return Boolean(wikiWindow.$tw.wiki.getTiddler(expectedTitle));
  }, targetTitle)).toBe(false);
});

test('clones a tiddler through action-string variable prompt', async ({ page }) => {
  const sourceTitle = `Playwright Clone Source ${Date.now()}`;

  await page.evaluate((tiddlerTitle) => {
    const wikiWindow = window as unknown as { $tw: any };
    wikiWindow.$tw.wiki.addTiddler({
      title: tiddlerTitle,
      text: 'This tiddler will be cloned via command palette parameter.',
      tags: ['PlaywrightCloneTag'],
    });
    wikiWindow.$tw.wiki.addTiddler({
      title: '$:/StoryList',
      list: [tiddlerTitle],
    });
    wikiWindow.$tw.wiki.addTiddler({
      title: '$:/temp/focussedTiddler',
      text: tiddlerTitle,
    });
  }, sourceTitle);

  const input = await openCommandPalette(page, '$');
  await typeIntoPalette(input, '$Clonar entradas');
  await clickPaletteItem(page, 'Copiar');

  await expect(page.locator(palettePanelSelector)).toContainText('Entradas de plantilla');

  const wizardInput = page.locator(paletteInputSelector);
  await typeIntoPalette(wizardInput, sourceTitle);
  await clickPaletteItem(page, `Confirmar entrada: ${sourceTitle}`);

  await expect.poll(() => getDraftCount(page)).toBeGreaterThanOrEqual(1);
});
