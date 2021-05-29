import { getExpectedResults } from "./data/known-user-agent-results.js";
import { ExtractDataFromClient } from "../../../../netflix/browser/browser-report.js";

describe("User Agent Matching", function () {
  getExpectedResults().forEach(function (item) {
    let expected = item["expectedReport"];
    let message = "should correctly identify {device}".replace(
      "{device}",
      item.device
    );

    it(message, function () {
      let report = new ExtractDataFromClient(item.userAgent).report;

      if (report["browser"]["version"]) {
        report["browser"]["majorVersion"] =
          report["browser"]["version"].split(".")[0];
      }

      for (let key in expected["browser"]) {
        try {
          report["browser"][key].equal(expected["browser"][key]);
        } catch (err) {
          console.log(report);
          throw err;
        }
      }

      if (!(report["os"]["name"] == expected["os"]["name"]))
        console.error(
          `Report: ${report} doesn't match with Expected: ${expected}`
        );

      if (!(report["os"]["version"] == expected["os"]["version"]))
        console.error(
          `Report: ${report} doesn't match with Expected: ${expected}`
        );
    });
  });
});
