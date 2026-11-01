import { test, expect, type Page } from "@playwright/test";
const title = "Une stratégie commence par un renoncement";
async function nav(page: Page, name: string) {
  await page
    .getByRole("navigation", { name: "Navigation mobile" })
    .getByRole("button", { name, exact: true })
    .click();
}
async function init(page: Page) {
  await page.goto("/");
  await expect(page.locator(".idea-grid .idea-card")).toHaveCount(24);
}
async function openFirst(page: Page) {
  await page
    .locator(".idea-grid")
    .getByRole("button", { name: new RegExp("^" + title) })
    .click();
  await expect(
    page.getByRole("heading", { level: 1, name: title }),
  ).toBeVisible();
}
test("navigation, lecture, catégories, recherche par auteur et source", async ({
  page,
}) => {
  await init(page);
  await page.getByRole("button", { name: "Psychologie", exact: true }).click();
  await expect(page.locator(".idea-grid .idea-card")).toHaveCount(24);
  await page
    .getByRole("button", { name: "Toutes les idées", exact: true })
    .click();
  await page
    .getByRole("textbox", { name: "Rechercher des idées" })
    .fill("Nickerson");
  await expect(page.locator(".idea-grid .idea-card")).toHaveCount(2);
  await page
    .getByRole("textbox", { name: "Rechercher des idées" })
    .fill("Good Strategy Bad Strategy");
  await expect(page.locator(".idea-grid .idea-card")).toHaveCount(2);
  await page
    .getByRole("textbox", { name: "Rechercher des idées" })
    .fill("introuvable-123");
  await expect(
    page.getByRole("heading", { name: "Aucune idée trouvée" }),
  ).toBeVisible();
  await page.getByRole("button", { name: "Effacer la recherche" }).click();
  await openFirst(page);
  await expect(
    page.getByRole("heading", { name: "À retenir", exact: true }),
  ).toBeVisible();
  await expect(page.locator(".reference")).toContainText(
    "Harvard Business Review",
  );
  await page
    .getByRole("button", { name: "Changer la taille du texte" })
    .click();
  await expect(page.locator(".reader")).toHaveClass(/large-text/);
  await nav(page, "Bibliothèque");
  await page.getByRole("button", { name: "Historique" }).click();
  await expect(page.locator(".idea-card")).toHaveCount(1);
  await page.getByRole("button", { name: "Sources" }).click();
  await expect(page.locator(".book-item")).toHaveCount(42);
  await page
    .locator(".book-item")
    .first()
    .getByRole("button", { name: "Explorer les fiches" })
    .click();
  await expect(page.locator(".idea-grid .idea-card")).toHaveCount(2);
});
test("favoris et préférences persistent après rechargement", async ({
  page,
}) => {
  await init(page);
  await page
    .locator(".idea-grid")
    .getByRole("button", { name: `Sauvegarder : ${title}`, exact: true })
    .click();
  await nav(page, "Bibliothèque");
  await expect(page.locator(".idea-card")).toHaveCount(1);
  await page.getByRole("button", { name: "Activer le mode sombre" }).click();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
  await page.reload();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
  await expect(page.locator(".idea-card")).toHaveCount(1);
  await page
    .getByRole("button", { name: `Retirer : ${title}`, exact: true })
    .click();
  await expect(
    page.getByRole("heading", { name: "Aucune idée sauvegardée" }),
  ).toBeVisible();
});
test("collections : créer, ajouter, renommer, retirer et supprimer", async ({
  page,
}) => {
  await init(page);
  await nav(page, "Collections");
  await page.getByRole("button", { name: "Nouvelle collection" }).click();
  await page
    .getByRole("textbox", { name: "Nom", exact: true })
    .fill("Décider autrement");
  await page.getByRole("button", { name: "Enregistrer", exact: true }).click();
  await nav(page, "Découvrir");
  await openFirst(page);
  await page
    .getByRole("button", { name: "Ajouter à une collection", exact: true })
    .click();
  await page
    .getByRole("button", { name: "Décider autrement", exact: true })
    .click();
  await expect(
    page.getByRole("button", { name: "Décider autrement", exact: true }),
  ).toHaveAttribute("aria-pressed", "true");
  await page.getByRole("button", { name: "Fermer la fenêtre" }).click();
  await nav(page, "Collections");
  await page.locator(".collection-open").click();
  await expect(page.locator(".idea-card")).toHaveCount(1);
  await page.reload();
  await page.locator(".collection-open").click();
  await expect(page.locator(".idea-card")).toHaveCount(1);
  await page.getByRole("button", { name: "Modifier", exact: true }).click();
  await page
    .getByRole("textbox", { name: "Nom", exact: true })
    .fill("Mes décisions");
  await page.getByRole("button", { name: "Enregistrer", exact: true }).click();
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "Mes décisions",
  );
  await page
    .getByRole("button", { name: "Retirer de la collection", exact: true })
    .click();
  await expect(page.locator(".idea-card")).toHaveCount(0);
  await page.getByRole("button", { name: "Supprimer", exact: true }).click();
  await page
    .getByRole("button", { name: "Supprimer la collection", exact: true })
    .click();
  await expect(page.locator(".collection-card")).toHaveCount(0);
});
test("export, validation de l’import et restauration transactionnelle", async ({
  page,
}) => {
  await init(page);
  await page
    .locator(".idea-grid")
    .getByRole("button", { name: `Sauvegarder : ${title}`, exact: true })
    .click();
  await nav(page, "Réglages");
  const download = page.waitForEvent("download");
  await page
    .getByRole("button", { name: "Exporter JSON", exact: true })
    .click();
  const file = await download;
  const path = await file.path();
  expect(path).toBeTruthy();
  await page.locator("input[type=file]").setInputFiles({
    name: "invalid.json",
    mimeType: "application/json",
    buffer: Buffer.from('{"version":2}'),
  });
  await expect(page.locator(".error")).toContainText("Sauvegarde invalide");
  await nav(page, "Bibliothèque");
  await expect(page.locator(".idea-card")).toHaveCount(1);
  await page
    .getByRole("button", { name: `Retirer : ${title}`, exact: true })
    .click();
  await expect(page.locator(".idea-card")).toHaveCount(0);
  await nav(page, "Réglages");
  await page.locator("input[type=file]").setInputFiles(path!);
  await expect(page.getByRole("dialog")).toContainText("1 favoris");
  await page.getByRole("button", { name: "Remplacer et restaurer" }).click();
  await nav(page, "Bibliothèque");
  await expect(page.locator(".idea-card")).toHaveCount(1);
});
test("hors ligne : rechargement, lecture, favoris, collections et source externe", async ({
  page,
  context,
}) => {
  await init(page);
  await expect
    .poll(() =>
      page.evaluate(async () => {
        const reg = await navigator.serviceWorker.ready;
        return !!reg.active && !!navigator.serviceWorker.controller;
      }),
    )
    .toBeTruthy();
  await nav(page, "Réglages");
  await expect(
    page.getByText("Les ressources de l’application sont prêtes", {
      exact: false,
    }),
  ).toBeVisible();
  await context.setOffline(true);
  await page.reload();
  await expect(page.getByRole("heading", { name: "Réglages." })).toBeVisible();
  await nav(page, "Découvrir");
  await expect(page.locator(".idea-grid .idea-card")).toHaveCount(24);
  await openFirst(page);
  await page
    .getByRole("button", { name: "Sauvegarder cette idée", exact: true })
    .click();
  await expect(
    page.getByLabel("Retirer des favoris", { exact: true }),
  ).toBeVisible();
  await page.getByRole("link", { name: "Consulter la référence" }).click();
  await expect(page.locator(".error")).toContainText("nécessite une connexion");
  await nav(page, "Collections");
  await page.getByRole("button", { name: "Nouvelle collection" }).click();
  await page
    .getByRole("textbox", { name: "Nom", exact: true })
    .fill("Sans réseau");
  await page.getByRole("button", { name: "Enregistrer", exact: true }).click();
  await page.reload();
  await expect(page.locator(".collection-card")).toContainText("Sans réseau");
  await nav(page, "Bibliothèque");
  await expect(page.locator(".idea-card")).toHaveCount(1);
  const unavailable = await page.evaluate(async () => {
    const r = await fetch("/non-cache.txt");
    return { status: r.status, text: await r.text() };
  });
  expect(unavailable.status).toBe(503);
  expect(unavailable.text).toContain("hors ligne");
});
test("découverte aléatoire et présentation mobile et bureau sans débordement", async ({
  page,
}) => {
  await init(page);
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
  ).toBeTruthy();
  await page.screenshot({ path: "test-results/mobile.png", fullPage: true });
  await page.getByRole("button", { name: "Lire au hasard" }).click();
  await expect(page.locator(".reader")).toBeVisible();
  await page.getByRole("button", { name: "Retour", exact: true }).click();
  await expect(page.locator(".idea-grid .idea-card")).toHaveCount(24);
  await page.setViewportSize({ width: 1440, height: 1000 });
  await expect(
    page.getByRole("navigation", { name: "Navigation principale" }),
  ).toBeVisible();
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
  ).toBeTruthy();
  await page.screenshot({ path: "test-results/desktop.png", fullPage: true });
});

test("la progression persiste et la lecture reprend au bon endroit", async ({
  page,
}) => {
  await init(page);
  await openFirst(page);
  await page.evaluate(() =>
    window.scrollTo(
      0,
      (document.documentElement.scrollHeight - innerHeight) * 0.45,
    ),
  );
  await expect
    .poll(async () =>
      Number(await page.getByRole("progressbar").getAttribute("aria-valuenow")),
    )
    .toBeGreaterThan(35);
  await nav(page, "Découvrir");
  await expect(
    page
      .getByRole("button", { name: new RegExp("^" + title) })
      .filter({ has: page.locator("svg") }),
  ).toBeVisible();
  await page.locator(".reading-note").getByRole("button").click();
  await expect(page.locator(".reader")).toBeVisible();
  await expect
    .poll(() =>
      page.evaluate(
        () => scrollY / (document.documentElement.scrollHeight - innerHeight),
      ),
    )
    .toBeGreaterThan(0.35);
});

test("le catalogue étendu se charge progressivement et la recherche couvre toutes les fiches", async ({
  page,
  context,
}) => {
  await init(page);
  await page
    .getByRole("button", { name: "Afficher plus d’idées", exact: true })
    .click();
  await expect(page.locator(".idea-grid .idea-card")).toHaveCount(48);
  await page.getByRole("button", { name: "Philosophie", exact: true }).click();
  await expect(page.locator(".idea-grid .idea-card")).toHaveCount(24);
  await page
    .getByRole("button", { name: "Afficher plus d’idées", exact: true })
    .click();
  await expect(page.locator(".idea-grid .idea-card")).toHaveCount(40);
  await expect(
    page.getByRole("button", { name: "Afficher plus d’idées", exact: true }),
  ).toHaveCount(0);
  await page
    .getByRole("button", { name: "Toutes les idées", exact: true })
    .click();
  await page
    .getByRole("textbox", { name: "Rechercher des idées" })
    .fill("Beauvoir");
  await expect(page.locator(".idea-grid .idea-card")).toHaveCount(3);
  await page.locator(".idea-grid .card-read").first().click();
  await expect(page.locator(".reference")).toContainText("Le Deuxième Sexe");
  await page
    .getByRole("button", { name: "Sauvegarder cette idée", exact: true })
    .click();
  await expect(
    page.getByLabel("Retirer des favoris", { exact: true }),
  ).toBeVisible();
  await nav(page, "Découvrir");
  await page
    .getByRole("textbox", { name: "Rechercher des idées" })
    .fill("conatus");
  await expect(page.locator(".idea-grid .idea-card")).toHaveCount(1);
  await page
    .getByRole("textbox", { name: "Rechercher des idées" })
    .fill("Bandura");
  await expect(page.locator(".idea-grid .idea-card")).toHaveCount(4);
  await page
    .getByRole("textbox", { name: "Rechercher des idées" })
    .fill("Sarasvathy");
  await expect(page.locator(".idea-grid .idea-card")).toHaveCount(4);
  await nav(page, "Réglages");
  await expect(
    page.getByText("Les ressources de l’application sont prêtes", {
      exact: false,
    }),
  ).toBeVisible();
  await context.setOffline(true);
  await page.reload();
  await expect(page.getByRole("heading", { name: "Réglages." })).toBeVisible();
  await nav(page, "Bibliothèque");
  await expect(page.locator(".idea-card")).toHaveCount(1);
  await page.locator(".card-read").click();
  await expect(page.locator(".reference")).toContainText("Le Deuxième Sexe");
});
