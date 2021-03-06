const Jasmine = require('jasmine');
const jasmine = new Jasmine();
const SpecReporter = require('jasmine-spec-reporter').SpecReporter;
const deep = process.argv.slice(2)[0]==='deep';
jasmine.loadConfig({
    spec_dir: 'tests/specs',
    spec_files: ['test-*.js']
});

jasmine.clearReporters();
jasmine.addReporter(new SpecReporter({
  spec: {
    displayErrorMessages: false,
    displayStacktrace: true,
    displaySuccessful: !deep,
    displayFailed: true,
    displayPending: !deep,
    displayDuration: false
  },
  summary: {
    displayErrorMessages: deep,
    displayStacktrace: deep,
    displaySuccessful: false,
    displayFailed: deep,
    displayPending: false,
    displayDuration: true
  }
}));

jasmine.execute();