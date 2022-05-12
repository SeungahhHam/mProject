using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.XR.ARFoundation;
using UnityEngine.XR.ARSubsystems;
using System;
using System.Text;

using UnityEngine.Networking;
using UnityEngine.UI;


public class ARPlaceOnPlane : MonoBehaviour
{
    public ARRaycastManager arRaycaster;
    public GameObject placeObject; /*봄*/
    public GameObject placeObject1; /*여름*/
    public GameObject placeObject2; /*가을*/
    public GameObject placeObject3; /*겨울*/

    GameObject spawnObject;

    [SerializeField] Text mention;


    void Update()
    {
        PlaceObjectByTouch();
    }

    private void PlaceObjectByTouch()
    {
        if (Input.touchCount > 0) // 첫 번째 터치 : TreeSpawn
        {

            Touch touch = Input.GetTouch(0);
            List<ARRaycastHit> hits = new List<ARRaycastHit>();
            if (arRaycaster.Raycast(touch.position, hits, TrackableType.Planes))
            {
                Pose hitPose = hits[0].pose;

                if (!spawnObject)
                {
                    if (DateTime.Now.ToString("MM") == "03" || DateTime.Now.ToString("MM") == "04" || DateTime.Now.ToString("MM") == "05")
                        spawnObject = Instantiate(placeObject, hitPose.position, hitPose.rotation);
                    else if (DateTime.Now.ToString("MM") == "06" || DateTime.Now.ToString("MM") == "07" || DateTime.Now.ToString("MM") == "08")
                        spawnObject = Instantiate(placeObject1, hitPose.position, hitPose.rotation);
                    else if (DateTime.Now.ToString("MM") == "09" || DateTime.Now.ToString("MM") == "10")
                        spawnObject = Instantiate(placeObject2, hitPose.position, hitPose.rotation);
                    else
                        spawnObject = Instantiate(placeObject3, hitPose.position, hitPose.rotation);

                }
                else
                {
                    StartCoroutine(UnityWebRequestPOSTTEST());
                }
            }
        }
    }


    IEnumerator UnityWebRequestPOSTTEST()
    {
        string url1 = "http://3.34.32.228:5000/api/unity/get"; //3.34.32.228:5000/api/unity/get
        UnityWebRequest www1 = UnityWebRequest.Get(url1);
        yield return www1.SendWebRequest();

        if (www1.error == null)
        {
            Debug.Log(www1.downloadHandler.text);
            string result = www1.downloadHandler.text;
            mention.text = result + " 인증 완료!";


            WWWForm form = new WWWForm();
            form.AddField("message", "android");
            UnityWebRequest www = UnityWebRequest.Post("http://3.34.32.228:5000/api/unity/post", form);
            yield return www.SendWebRequest();

            if (www.error == null)
            {
                Debug.Log(www.downloadHandler.text);
            }
            else
            {
                Debug.Log("error");
            }
        }
        else
        {
            Debug.Log("error");
        }
    }

}
