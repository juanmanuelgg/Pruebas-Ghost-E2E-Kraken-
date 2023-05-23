const { Given, When, Then } = require("@cucumber/cucumber");
const { faker } = require("@faker-js/faker");
const fs = require("fs");
const csv = require("csv-parser");
const data = [];
const axios = require("axios");
const { title } = require("process");

//Pruebas con estrategía aleatoria
module.exports = {
  execute: function (data) {
    const email = faker.internet.email();
    const password = faker.internet.password();
    const title = faker.lorem.text();
    const detail = faker.lorem.text();
    const name = faker.person.fullName();
  },
};

var current_tag_slug = "";
var existing_tag_name = "";
var existing_email_staff = "";

//Pruebas con estrategía a-priori
Given("I have data from {string}", async function (csvFilePath) {
  return new Promise((resolve, reject) => {
    fs.createReadStream(csvFilePath)
      .pipe(csv())
      .on("data", (row) => {
        data.push(row);
      })
      .on("end", () => {
        resolve();
      })
      .on("error", (error) => {
        reject(error);
      });
  });
});

//Pruebas con estrategía consumo API Mockaroo
Given("I consume API", async function () {
  console.log("Pasooo");

  const response = await axios.get(
    "https://my.api.mockaroo.com/post.json?key=976f9b40"
  );
  const posicion = Math.floor(Math.random() * 11);
  const dataapiMockaroo = response.data;
  const title = dataapiMockaroo[posicion].title;
  const detail = dataapiMockaroo[posicion].detail;
  let element = await this.driver.$(
    "div > textarea.gh-editor-title.ember-text-area.gh-input.ember-view"
  );

  let elementDetail = await this.driver.$(
    "div.koenig-editor__editor.__mobiledoc-editor"
  );

  return await element.setValue(title), elementDetail.setValue(detail);
});

Then("I edit post", async function () {
  let elemenTitle = await this.driver.$(
    "div > textarea.gh-editor-title.ember-text-area.gh-input.ember-view"
  );
  let elementDetail = await this.driver.$(
    "div.koenig-editor__editor.__mobiledoc-editor"
  );
  const titleedit = faker.random.alpha(500);
  console.log(titleedit);
  const detailedit = faker.lorem.text();

  return (
    await elemenTitle.setValue(titleedit), elementDetail.setValue(detailedit)
  );
});

Then("I enter new name", async function () {
  const name = faker.random.alpha(1);
  let element = await this.driver.$("input#user-name");
  return await element.setValue(name);
});

Then("I enter new email", async function () {
  const email = faker.internet.email();
  let element = await this.driver.$("input#user-email");
  return await element.setValue(email);
});

Then("I enter new password one", async function () {
  const pass = faker.random.alpha(1);
  let element = await this.driver.$("input#user-password-new");
  let elementRepeat = await this.driver.$(
    "input#user-new-password-verification"
  );
  return await element.setValue(pass), await elementRepeat.setValue(pass);
});

Then("I enter new password ten", async function () {
  const pass = faker.random.alpha(10);
  let element = await this.driver.$("input#user-password-new");
  let elementRepeat = await this.driver.$(
    "input#user-new-password-verification"
  );
  return await element.setValue(pass), await elementRepeat.setValue(pass);
});

When("I enter tag-descripton-one", async function () {
  const randomDesc = faker.random.alpha(1);
  let element = await this.driver.$("#tag-description");
  return await element.setValue(randomDesc);
});

When("I enter tag-descripton-five-hundred", async function () {
  const randomDesc = faker.random.alpha(500);
  let element = await this.driver.$("#tag-description");
  return await element.setValue(randomDesc);
});

When("I enter tag-descripton-five-hundred-one", async function () {
  const randomDesc = faker.random.alpha(501);
  let element = await this.driver.$("#tag-description");
  return await element.setValue(randomDesc);
});

When("I enter login incorrect password", async function () {
  const password = faker.internet.password();
  console.log(password);
  let element = await this.driver.$("#ember9");
  return await element.setValue(password);
});

Then("I enter title page", async function () {
  const title = faker.lorem.text();
  let element = await this.driver.$(
    "div > textarea.gh-editor-title.ember-text-area.gh-input.ember-view"
  );
  return await element.setValue(title);
});

Then("I enter title page five-hundred-one", async function () {
  const title = faker.random.alpha(501);
  let element = await this.driver.$(
    "div > textarea.gh-editor-title.ember-text-area.gh-input.ember-view"
  );
  return await element.setValue(title);
});

Then("I enter detail page", async function () {
  const detail = faker.lorem.text();
  let element = await this.driver.$(
    "div.koenig-editor__editor.__mobiledoc-editor.__has-no-content"
  );
  return await element.setValue(detail);
});

Then("I random page", async function () {
  let element = "";
  const opcion = Math.floor(Math.random() * 4) + 1;
  switch (opcion) {
    case 1:
      element = await this.driver.$('.ember-view[href="#/posts/"]');
      return await element.click();
      break;
    case 2:
      element = await this.driver.$('.ember-view[href="#/pages/"]');
      return await element.click();
      break;
    case 3:
      element = await this.driver.$('.ember-view[href="#/tags/"]');
      return await element.click();
      break;
    default:
      element = await this.driver.$('.ember-view[href="#/members/"]');
      return await element.click();
      break;
  }
});

When("I enter login email CSV {string}", async function (email) {
  const opcion = Math.floor(Math.random() * data.length) + 1;
  console.log(email);
  email = data[opcion].email;
  let element = await this.driver.$("#ember8");
  return await element.setValue(email);
});

When("I enter login password CSV {string}", async function (password) {
  let element = await this.driver.$("#ember9");
  return await element.setValue(password);
});

Then("I create new member", async function () {
  let element = await this.driver.$('.ember-view[href="#/members/"]');
  element.click();

  let elementNew = await this.driver.$(
    '.ember-view.gh-btn.gh-btn-primary[href="#/members/new/"]'
  );
  elementNew.click();

  const name = faker.internet.userName();
  let elementName = await this.driver.$("input#member-name");
  await elementName.setValue(name);

  const email = faker.internet.email();
  let elementEmail = await this.driver.$("input#member-email");
  await elementEmail.setValue(email);

  const note = faker.lorem.text();
  let elementNote = await this.driver.$("textarea#member-note");
  await elementNote.setValue(note);

  let save = await this.driver.$(
    "button.gh-btn.gh-btn-primary.gh-btn-icon.ember-view"
  );
  return await save.click();
});

When("I enter login email {kraken-string}", async function (email) {
  email = data[opcion].email;
  let element = await this.driver.$("#ember8");
  return await element.setValue(email);
});

When("I enter login password {kraken-string}", async function (password) {
  let element = await this.driver.$("#ember9");
  return await element.setValue(password);
});

When("I submit login", async function () {
  let element = await this.driver.$("#ember11");
  return await element.click();
});

Then("I should have a nav-bar with functions", async function () {
  let element = await this.driver.$("section .gh-nav-top");
  return await element;
});

When("I click on the tag function", async function () {
  let element = await this.driver.$('a[href="#/tags/"]');
  return await element.click();
});
Then("I should have a new tag button", async function () {
  let element = await this.driver.$("a[href='#/tags/new/']");
  return await element;
});
When("I click on the tag button", async function () {
  let element = await this.driver.$("a[href='#/tags/new/");
  return await element.click();
});

Then(
  "I should have a form to enter tag information and save button",
  async function () {
    let element = await this.driver.$(
      "#tag-name,#tag-slug,#tag-description,section .view-actions > button"
    );
    return await element;
  }
);

When("I enter tag name", async function () {
  let randomName = faker.name.fullName();
  let element = await this.driver.$("#tag-name");
  return await element.setValue(randomName);
});
When("I enter tag-slug", async function () {
  let randomSlug = faker.random.alphaNumeric(10);
  current_tag_slug = randomSlug;
  let element = await this.driver.$("#tag-slug");
  await element.setValue("");
  return await element.setValue(randomSlug);
});

When("I click Save", async function () {
  let element = await this.driver.$("section .view-actions button");
  return await element.click();
});
Then("I should have a new tag with corrent slug link", async function () {
  let element = await this.driver.$(`a[href='#/tags/${current_tag_slug}/']`);
  return await element;
});
When("I enter tag without name", async function () {
  let element = await this.driver.$("#tag-name");
  return await element.setValue("");
});
Then("I should have Error specify Tag Name", async function () {
  let element = await this.driver.$(
    "span .error,span .retry_svg__retry-animated"
  );
  return await element;
});
Then("I save and existing tag name", async function () {
  let element = await this.driver.$(".gh-tag-list-name").getText();
  existing_tag_name = await element;
  return await element;
});
When("I enter existing tag name", async function () {
  let element = await this.driver.$("#tag-name");
  return await element.setValue(existing_tag_name);
});

When("I click on the {kraken-string} function", async function (function_val) {
  let element = await this.driver.$(`a[href="#/${function_val}/"]`);
  return await element.click();
});
When("I should have this {kraken-string} button", async function (button_val) {
  let element = await this.driver.$(`.${button_val}`);
  return await element;
});
When("I click invite people", async function () {
  let element = await this.driver.$(`.gh-btn.gh-btn-green`);
  return await element.click();
});
When("I enter email Adress", async function () {
  let randomEmail = faker.internet.email();
  let element = await this.driver.$(`input[name="email"]`);
  return await element.setValue(randomEmail);
});
When("I send invitation", async function () {
  let element = await this.driver.$(
    `.gh-btn.gh-btn-green.gh-btn-icon.ember-view`
  );
  return await element.click();
});
Then("I should not have email send error message", async function () {
  let element = await this.driver.$(
    `.gh-alert.gh-alert-red.ember-view .gh-alert-content`
  );
  return await element.getText();
});
When("I enter invalid email Adress", async function () {
  let randomEmail = faker.name.fullName();
  let element = await this.driver.$(`input[name="email"]`);
  return await element.setValue(randomEmail);
});
Then("I should have email send error message", async function () {
  let element = await this.driver.$(`.retry_svg__retry-animated`);
  return await element;
});
Then("I save existing email", async function () {
  let element = await this.driver.$(`h3.apps-card-app-title`).getText();
  existing_email_staff = await element;
  return element;
});
When("I enter existing email Adress", async function () {
  let element = await this.driver.$(`input[name="email"]`);
  return await element.setValue(existing_email_staff);
});
Then(
  "I should have email error message {string}",
  async function (error_message) {
    let element = await this.driver.$(`p.response`).getText();
    let user_already_invited = (await element) == error_message;
    return user_already_invited;
  }
);
When("I change the role", async function () {
  const element = await this.driver
    .$(`option[value='6457302b5ab6ff0001fba499']`)
    .setValue("No tiene sentido");
  return element;
});

Then("I enter title post {kraken-string}", async function (title) {
  let element = await this.driver.$(
    "div > textarea.gh-editor-title.ember-text-area.gh-input.ember-view"
  );
  return await element.setValue(title);
});

Then("I enter detail post {kraken-string}", async function (detail) {
  let element = await this.driver.$(
    "div.koenig-editor__editor.__mobiledoc-editor"
  );
  return await element.setValue(detail);
});

Then("I click post", async function () {
  let element = await this.driver.$("ol.posts-list.gh-list >  li:nth-child(2)");
  return await element.click();
});

Then("I enter title post edit {kraken-string}", async function (titleedit) {
  let element = await this.driver.$(
    "div > textarea.gh-editor-title.ember-text-area.gh-input.ember-view"
  );
  return await element.setValue(titleedit);
});

Then("I enter detail post edit {kraken-string}", async function (detailedit) {
  let element = await this.driver.$(
    "div.koenig-editor__editor.__mobiledoc-editor"
  );
  return await element.setValue(detailedit);
});

Then("I click filter", async function () {
  let element = await this.driver.$(
    "div.ember-view.ember-basic-dropdown-trigger.ember-power-select-trigger.gh-contentfilter-menu-trigger"
  );
  return await element.click();
});
Then("I click filter for publish", async function () {
  let element = await this.driver.$("ul >  li:nth-child(3)");
  return await element.click();
});

Then("I clic avatar", async function () {
  let element = await this.driver.$("div.gh-user-avatar.relative");
  return await element.click();
});

Then("I clic img", async function () {
  let element = await this.driver.$(
    "ul.dropdown-menu.dropdown-triangle-top >  li:nth-child(4)"
  );
  return await element.click();
});

Then("I enter new name {kraken-string}", async function (name) {
  let element = await this.driver.$("input#user-name");
  return await element.setValue(name);
});

Then("I clic save", async function () {
  let element = await this.driver.$(
    "button.gh-btn.gh-btn-primary.gh-btn-icon.ember-view"
  );
  return await element.click();
});

Then("I enter old password {kraken-string}", async function (passwordNew) {
  let element = await this.driver.$("input#user-password-old");
  return await element.setValue(passwordNew);
});

Then("I enter new password {kraken-string}", async function (passwordNew) {
  let element = await this.driver.$("input#user-password-new");
  return await element.setValue(passwordNew);
});

Then(
  "I enter verification password {kraken-string}",
  async function (passwordNew) {
    let element = await this.driver.$("input#user-new-password-verification");
    return await element.setValue(passwordNew);
  }
);

Then("I clic save password", async function () {
  let element = await this.driver.$(
    "button.gh-btn.gh-btn-icon.button-change-password.gh-btn-red.ember-view"
  );
  return await element.click();
});

Then("I click publish", async function () {
  let element = await this.driver.$("div.gh-publishmenu.ember-view");
  return await element.click();
});

Then("I click opcion publish", async function () {
  let element = await this.driver.$(
    "button.gh-btn.gh-btn-black.gh-publishmenu-button.gh-btn-icon.ember-view"
  );
  return await element.click();
});

Then("I confirm post publication", async function () {
  let element = await this.driver.$(
    "button.gh-btn.gh-btn-black.gh-btn-icon.ember-view"
  );
  return await element.click();
});

Then("I clic post unpublished", async function () {
  let element = await this.driver.$(
    "div.gh-publishmenu-radio-content >  div:nth-child(1)"
  );
  return await element.click();
});

Then("I save post unpublished", async function () {
  let element = await this.driver.$(
    "button.gh-btn.gh-btn-black.gh-publishmenu-button.gh-btn-icon.ember-view"
  );
  return await element.click();
});
