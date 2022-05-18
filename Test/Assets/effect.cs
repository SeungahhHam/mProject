using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using System;
using System.Text;

public class effect : MonoBehaviour
{
    [SerializeField] Text text;

    void Awake()
    {
        text = GetComponent<Text>();

        StartCoroutine(WaitForIt());
    }

    public IEnumerator FadeTextToFullAlpha() // 알파값 0에서 1로 전환
    {
        text.color = new Color(text.color.r, text.color.g, text.color.b, 0);
        while (text.color.a < 1.0f)
        {
            text.color = new Color(text.color.r, text.color.g, text.color.b, text.color.a + (Time.deltaTime / 5.0f));
            yield return null;
        }
    }
    public IEnumerator WaitForIt()
    {
        yield return new WaitForSeconds(2.0f);
        StartCoroutine(FadeTextToFullAlpha());
    }
}