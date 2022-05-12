using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Networking;
using UnityEngine.UI;
using System;
using System.Text;

public class Message : MonoBehaviour
{
    [SerializeField] Text mention;

    void Start()
    {
        /* if (Input.touchCount > 0)
         {*/
            StartCoroutine(UnityWebRequestPOSTTEST());
         /*}*/
    }

    IEnumerator UnityWebRequestPOSTTEST()
    {
        string url1 = "http://localhost:5000/get"; //3.34.32.228:5000/api/unity/get
        UnityWebRequest www1 = UnityWebRequest.Get(url1);
        yield return www1.SendWebRequest();

        if (www1.error == null)
        {
            Debug.Log(www1.downloadHandler.text);
            string result = www1.downloadHandler.text;
            mention.text = result + " 인증 완료!";


            WWWForm form = new WWWForm();
            form.AddField("message", "android");
            UnityWebRequest www = UnityWebRequest.Post("http://localhost:5000/post", form);
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

