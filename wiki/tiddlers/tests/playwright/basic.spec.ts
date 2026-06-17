import { expect, test } from '@playwright/test';
import {
  closeCommandPalette,
  getOpenState,
  openCommandPalette,
  palettePanelSelector,
  seedBaseState,
  waitForWiki,
} from './fixtures';

test.beforeEach(async ({ page }) => {
  await waitForWiki(page);
  await seedBaseState(page);
});

test('opens and closes the command palette', async ({ page }) => {
  await openCommandPalette(page);
  await expect.poll(() => getOpenState(page)).toBe('yes');

  await closeCommandPalette(page);
  await expect.poll(() => getOpenState(page)).toBe('');
});

test('shows Chinese help items in help mode', async ({ page }) => {
  await openCommandPalette(page, '?');

  await expect(page.locator(palettePanelSelector)).toContainText('Uso del menu de comandos');
  await expect(page.locator(palettePanelSelector)).toContainText('Entradas del sistema');
  await expect(page.locator(palettePanelSelector)).toContainText('Filtrar');
  await expect(page.locator(palettePanelSelector)).toContainText('Entradas de usuario');
});
