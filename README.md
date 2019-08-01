# hiking-example

# Setup an app

Clone the repo from https://github.com/mirzacuric/hiking-example.git

Run `npm install` to add all dependencies

Run `npm start` to start an app after all dependencies are added.

App is running on port `9000` and all routes are accessible with prefix `api/`

# Destination enpoints

Provide two-dimensional array where first element indicates size of array.
Rest are valid values indicating the paths values.

In order to find the highest value of optimal path request goes like this:
    endpoint: `${BACKEND_URL}/api/destination/findHighestValue`

    payload: points: [
        [6,4],
        [31415,92653,58979,32384],
        [62643,38327,95028,84197],
        [16939,93751,5820,97494],
        [45923,7816,40628,62089],
        [98628,3482,53421,17067],
        [98214,80865,13282,30664]
    ]
    
    expected outpout: 53421