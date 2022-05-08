using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Networking;

public class NewBehaviourScript : MonoBehaviour
{
    // Start is called before the first frame update
    void Start()
    {
        StartCoroutine(UnityWebRequestGETTest());
    }

    IEnumerator UnityWebRequestGETTest()
    {
        // GET ���
        // string apikey = "�߱޹��� APIŰ�� �ִ´�.";
        string url = "http://3.34.32.228:5000/"; //+ apikey;

        // UnityWebRequest�� ������ִ� GET �޼ҵ带 ����Ѵ�.
        UnityWebRequest www = UnityWebRequest.Get(url);

        yield return www.SendWebRequest();  // ������ �ö����� ����Ѵ�.

        if (www.error == null)  // ������ ���� ������ ����.
        {
            Debug.Log(www.downloadHandler.text);
        }
        else
        {
            Debug.Log("error");
        }
    }


}
