import fetch from 'node-fetch';
/**
 * @param  {string} studentId
 * @returns {Promise<boolean>} status
 */
export async function getStudentStatusFromMocki(studentId) {
  // External service URL: https://mocki.io/v1/:id
  // Request type: GET
  // valid ID: 1bb839fb-4ed8-4855-ab2c-bb535e0fef96
  // WRITE YOUR CODE HERE

  const response = await fetch('https://mocki.io/v1/' + studentId)

  if (!response.ok) return false;

  const data = await response.json()
  

  const dataExists = Boolean(data);

  return dataExists;

}
