import { Configuration, RunApi } from "../src";


describe('RunApi Integration Test', () => {
    it('retrieves list of runs', async () => {
        // Assume UserService is already configured with the correct API base URL
        console.log("")
        const run = new RunApi(new Configuration({
            apiKey: process.env.AUTOTAB_API_KEY,
            basePath: "http://localhost:8000/v1"
        }));
    
        const skillId = "skill_fe517503-384a-45c5-87a3-94f98126e626"; 
    
        // Call the API method
        try {
            const result = await run.list({
                skillId: skillId
            });
        
            // Assertions to check if the API call was successful and returned the expected data
            expect(result).toBeDefined();
            console.log("result:", result);
        } catch(e) {
            console.log("error:", e)
            throw e;
        }
    });
  it('starts run', async () => {
    // Assume UserService is already configured with the correct API base URL
    console.log("")
    const run = new RunApi(new Configuration({
        apiKey: process.env.AUTOTAB_API_KEY,
        basePath: "http://localhost:8000/v1"
    }));

    // You need to use a real user ID that exists in your live database/API
    const skillId = "skill_fe517503-384a-45c5-87a3-94f98126e626" ; // Replace 123 with a valid user ID

    // Call the API method
    const result = await run.start({
        runSkillRequest: {
            skillId: skillId
        }
    });

    // Assertions to check if the API call was successful and returned the expected data
    expect(result).toBeDefined();
    expect(result.skillId).toEqual(skillId);
    // Further checks can be added depending on the structure of User and the data returned
  }, 60 * 1000);

});