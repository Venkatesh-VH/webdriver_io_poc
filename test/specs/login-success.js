import LoginPage from "../pageobjects/login.page.mjs";
import DashboardPage from "../pageobjects/dashboard.page.mjs";
import { addStep } from "@wdio/allure-reporter";
import { strictEqual } from "assert";

describe("Evi File Login", () => {
    it("should login successfully", async () => {
        try {
            // browser.maximizeWindow();
            await LoginPage.open("");
            await LoginPage.login(process.env.EMAIL, process.env.PASSWORD);
            addStep("Login success", {}, "passed");
        } catch (e) {
            console.log("should login successfully error", e);
            addStep("Login failed", {}, "failed");
        }
    });

    it("should validate message after login", async () => {
        try {
            if (
                await DashboardPage.getPageTitle.waitForExist({
                    timeout: 10000,
                })
            ) {
                const welcomeMessage =
                    await DashboardPage.getPageTitle.getText();
                console.log("welcomeMessage", welcomeMessage);
                strictEqual(welcomeMessage, "welcome Test User 2");
                addStep("Login message success", {}, "passed");
            }
        } catch (e) {
            console.log("should validate message after login error", e);
            addStep("Login message failed", {}, "failed");
        }
    });
});
