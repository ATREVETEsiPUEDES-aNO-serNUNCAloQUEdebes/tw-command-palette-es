import { expect, test } from '@playwright/test';
import {
  clickPaletteItem,
  getSelectedSidebarTabTitle,
  openCommandPalette,
  palettePanelSelector,
  seedBaseState,
  typeIntoPalette,
  waitForWiki,
} from './fixtures';

test.beforeEach(async ({ page }) => {
  await waitForWiki(page);
  await seedBaseState(page);
});

test('finds sidebar tabs by english title and chinese caption', async ({ page }) => {
  const input = await openCommandPalette(page, '$');

  await typeIntoPalette(input, '$Recent');
  await expect(page.locator(palettePanelSelector)).toContainText('Recientemente - Cambiar pestanas de la barra lateral');

  await typeIntoPalette(input, '$Directorio de archivos');
  await expect(page.locator(palettePanelSelector)).toContainText('Directorio de archivos - Cambiar pestanas de la barra lateral');
});

test('switches the current sidebar tab from the command palette', async ({ page }) => {
  const input = await openCommandPalette(page, '$');

  await typeIntoPalette(input, '$Recent');
  await clickPaletteItem(page, 'Recientemente - Cambiar pestanas de la barra lateral');

  await expect.poll(() => getSelectedSidebarTabTitle(page)).toBe('$:/core/ui/SideBar/Recent');
  await expect(page.locator(palettePanelSelector)).toHaveCount(0);
});