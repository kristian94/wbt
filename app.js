const { benchmarkFile } = require('./docker');

benchmarkFile('fibonacci.js', [
    {
        exportName: 'fibonacci',
        input: 43,
        snapshotInterval: 250
    },
    {
        exportName: 'fibonacci',
        input: 40,
        snapshotInterval: 50
    }
]);