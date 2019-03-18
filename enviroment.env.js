module.exports = {
    dev: {
        db: 'mongodb://admin:admin123@ds113580.mlab.com:13580/db-xy-poi',
        port: 8888
    }, 
    test: {
        db: 'mongodb://admin:admin123@ds123976.mlab.com:23976/db-xy-poi-test',
        port: 8888
    },
    production: {
        db: '',
        port: 8888
    }
}