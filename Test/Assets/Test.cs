using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Networking;
using UnityEngine.UI;
using System;
using System.Text;

public class Test : MonoBehaviour
{
    [SerializeField] Text mention;

    void Start()
    {  
        StartCoroutine(UnityWebRequestPOSTTEST());
    }

    IEnumerator UnityWebRequestPOSTTEST()
    {
        string url1 = "http://3.34.32.228:5000/api/unity/get";
        UnityWebRequest www1 = UnityWebRequest.Get(url1);
        yield return www1.SendWebRequest();

        if (www1.error == null)
        {
            Debug.Log(www1.downloadHandler.text);
            string result = www1.downloadHandler.text;
            mention.text = result + "을 인증하였습니다.";


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

    /*IEnumerator Upload(string URL, string json)
    {
        using (UnityWebRequest request = UnityWebRequest.Post("http://172.16.200.52:5000/post", json))
        {
            byte[] jsonToSen = new System.Text.UTF8Encoding().GetBytes(json);
            request.uploadHandler = new UploadHandlerRaw(jsonToSend);
            request.downloadHandelr = (DownloadHandler)new DownloadHandlerBuffer();
            request.SetRequestHeader("Content-type", "application/json");

            yield return request.SendWebRequest();  // 응답 대기

            if (www.error == null)
            {
                Debug.Log(requset.downloadHandler.text);    // 데이터 출력
            }
            else
            {
                Debug.Log("error");
            }
        }
    }*/
}
