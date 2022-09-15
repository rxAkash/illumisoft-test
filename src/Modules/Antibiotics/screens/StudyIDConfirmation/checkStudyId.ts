const BASE_URL = 'https://cmhredcap.cmh.edu/plugins/pedsguide/app/index.php'

export const checkStudyId = async (studyId: string): Promise<number> => {
  const formData = new FormData();
  formData.append('data', ('{"patient_id":"' + studyId + '"}'));    
  const status = await fetch(BASE_URL, {
    method: 'POST',
    body: formData
  }).then((response) => {
    return response.status;
  }).catch((error) => {
    console.error(error);
    return error;
  });
  return status;
}