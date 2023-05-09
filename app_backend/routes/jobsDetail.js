const {
    getItems,
    getItem,
    addItem,
    updateItem,
    deleteItem,
    findProjectOfUser,
    findUserWithProject,
    getJobs
} = require('../../../../new/cpad-assignment-server/controllers/itemController.js');

const ItemSchema = {
    type: 'object',
    properties: {
        id: { type: 'integer' },
        username: { type: 'string' },
        name: {type: 'string'}
    }
}

const JobSchema = {
    type: 'object',
    properties: {
        employer_name: { type: 'string' },
        job_title: { type: 'string' },
        job_publisher: {type: 'string'},
        job_country: {type: 'string'}
    }
}

const getItemsOptions = {
    schema: {
        response: {
            200: {
                type: 'array',
                items: ItemSchema
            }
        }
    },
    handler: getItems,
}

const getJobsOptions = {
    schema: {
        response: {
            200: {
                type: 'array',
                items: JobSchema
            }
        }
    },
    handler: getJobs,
}

const getItemOptions = {
    schema: {
        response: {
            200: {
                type: 'object',
                properties: {
                    username: { type: 'string' },
                    name: { type: 'string' }
                }
            }
        }
    },
    handler: getItem,
}

const addItemOptions = {
    schema: {
        body: {
            type: 'object',
            required: ['username'],
            properties: {
                username: { type: 'string' },
                name: { type: 'string' }
            }
        },
        response: {
            200: {
                type: 'array',
                items: ItemSchema
            }
        }
    },
    handler: addItem
}

const updateItemOptions = {
    schema: {
        body: {
            type: 'object',
            required: ['username'],
            properties: {
                username: { type: 'string' },
                name: { type: 'string' }
            }
        },
        response: {
            200: {
                type: 'array',
                items: ItemSchema
            }
        }
    },
    handler: updateItem
}

const deleteItemOptions = {
    schema: {
        response: {
            200: {
                type: 'object',
                properties: {
                    message: { type: 'string' }
                }
            }
        }
    },
    handler: deleteItem
}
function itemRoutes(fastify, options, done) {
    //get all items
    fastify.get('/items', getItemsOptions);
    //get single item
    fastify.get('/items/:id', getItemOptions);
    //add an item
    fastify.post('/item', addItemOptions);
    //delete an item
    fastify.delete('/item/:id', deleteItemOptions);
    //update an item
    fastify.put('/item', updateItemOptions);
    
    done();
}

function jobRoutes(fastify, options, done) {
    //get all popular jobs
    fastify.get('/jobs/popular', getJobsOptions);
    fastify.get('/jobs/popular', getItems);
    done();
}

module.exports = itemRoutes;
module.exports = jobRoutes;