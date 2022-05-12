using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Networking;
using UnityEngine.UI;
using System;
using System.Text;

public class TextFade : MonoBehaviour
{
    [SerializeField] Text mention;

    void Awake()
    {
        mention = GetComponent<Text>();
        StartCoroutine(FadeTextToFullAlpha());
    }

    public IEnumerator FadeTextToFullAlpha() // 알파값 0에서 1로 전환
    {
        mention.color = new Color(mention.color.r, mention.color.g, mention.color.b, 0);
        while (mention.color.a < 1.0f)
        {
            mention.color = new Color(mention.color.r, mention.color.g, mention.color.b, mention.color.a + (Time.deltaTime / 2.0f));
            yield return null;
        }
    }
}