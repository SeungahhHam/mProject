using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using System;


public class TodayDate : MonoBehaviour
{
    [SerializeField] Text today1, today2, today3;
    // Update is called once per frame
    void Update()
    {
        today1.text = DateTime.Now.ToString("yyyy - MM - dd");
        today2.text = DateTime.Now.ToString("yyyy�� - MM�� - dd�� dddd");
        //today3.text = DateTime.Now.ToString("yyyy / MM / dd�� dddd");
        if(DateTime.Now.ToString("MM") == "04")
            today3.text = DateTime.Now.ToString("MM��");
        else
            today3.text = DateTime.Now.ToString("MM��");
    }


}
