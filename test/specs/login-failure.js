import MockApi from "../../mock-config.json" assert { type: "json" };
import Logger from "../../src/utils/logger.mjs";
import { getMenuTop, testMenuClick } from "../../src/menu-top.mjs";
import { getMenuBottom } from "../../src/menu-bottom.mjs";
import LoginPage from "../pageobjects/login.page.mjs";
import DashboardPage from "../pageobjects/dashboard.page.mjs";
import { addStep } from "@wdio/allure-reporter";
import getToastMessage from "../helpers/toast-message.mjs";

describe("Evi File Login Failure", () => {
    it("should login fail", async () => {
        try {
            // browser.maximizeWindow();
            await LoginPage.open("");
            await LoginPage.login("wrongemail.com", "Test@123");
            console.log("toastMessage", await getToastMessage().getText());
            await expect(getToastMessage()).toBeDisplayed();
            addStep("Login fail", {}, "passed");
        } catch (e) {
            console.log("should login fail_e", e);
            addStep("Login fail", {}, "failed");
        }
    });
});
