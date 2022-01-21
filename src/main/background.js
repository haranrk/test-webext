import { datadogLogs } from "@datadog/browser-logs";

datadogLogs.init({
  clientToken: "pub01e065e635656c9c31b427227a0e96fe",
  forwardErrorsToLogs: true,
  sampleRate: 100,
});

datadogLogs.logger.info("Button clicked", { name: "buttonName", id: 123 });
