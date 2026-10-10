

require('datejs');

function combineUsers(...args) {
    // Step 1: Initialize the return object
    const combinedObject = {
        users: []
    };

    // Step 2: Loop through each array
    for (const userArray of args) {
        // Step 3: Merge usernames using the spread operator
        combinedObject.users = [
            ...combinedObject.users,
            ...userArray
        ];
    }

    // Step 4: Add today's date in M/d/yyyy format
    combinedObject.merge_date = Date.today().toString('M/d/yyyy');

    // Step 5: Return the object
    return combinedObject;
}

module.exports = combineUsers;

module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};