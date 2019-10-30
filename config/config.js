var convict = require('convict');
var path = require('path');

var envs = {
    "env": "env",
    "ci": "ci",
    "ci-ad": "ci-ad",
    "ci-master": "ci-master",
    "testing": "testing",
    "testing-ad": "testing-ad",
    "master":"master",
    "testing-master": "testing-master",
    "docker": "docker",
    "demo": "demo",
    "production": "production",
    "production-ad": "production-ad", "testing-stage-ad": "testing-stage-ad", "ci-master-ad": "ci-master-ad", "ia": "ia"
}

// Define a schema
var config = convict({
    env: {
        doc: "The application environment.",
        format: Object.keys(envs),
        default: "env",
        env: "NODE_ENV"
    },
    port: {
        doc: "",
        format: "port",
        default: 4200
    },
    externalRepos: {
        content_type: {
            doc: "",
            format: "*",
            default: "localhost:3002"
        },
        jumb_box: {
            doc: "",
            format: "*",
            default: "localhost:3014"
        },
        configuration: {
            doc: "",
            format: "*",
            default: "localhost:3005"
        },
        inbox_notification: {
            doc: "",
            format: "*",
            default: "localhost:3007"
        },
        folder_structure: {
            doc: "",
            format: "*",
            default: "localhost:3004"
        },
        authentication: {
            doc: "",
            format: "*",
            default: "localhost:3000"
        },
        organization_structure: {
            doc: "",
            format: "*",
            default: "localhost:3001"
        },
        notificationengine: {
            doc: "",
            format: "*",
            default: "http://localhost:3006"
        },
        classifier: {
            doc: "",
            format: "*",
            default: "localhost:3018"
        }
    },
    
    viewer_url: {
        doc: "",
        format: '*',
        default: "http://localhost:8888/web/viewer.html"
    }, 
    zipkin: {
        host: {
            doc: "",
            format: "*",
            default: "192.168.0.90"
        },
        port: {
            doc: "",
            format: "port",
            default: 9411
        },
        name: {
            doc: "",
            format: "*",
            default: __dirname.split(path.sep)[__dirname.split(path.sep).length - 2]
        },
        enable: {
            doc: "",
            format: "*",
            default: true
        },
    },
     log: {
        connection: {
            doc: "Database log connection server",
            format: "*",
            default: "admin:123456@192.168.0.180:27017/LogDB"

        },
        collection: {
            doc: "Log collection in database",
            format: "*",
            default: "front_log"
        },
        repository: {
            doc: "Log repository",
            format: "*",
            default: __dirname.split(path.sep)[__dirname.split(path.sep).length - 2]
        }
    },
});

// Load environment dependent configuration
var env = config.get('env');
console.log("env",env);
config.loadFile('./config/' + env + '.json');

// Perform validation
config.validate({ allowed: 'strict' });

module.exports = config;
