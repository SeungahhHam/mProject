using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.XR.ARFoundation;
using UnityEngine.XR.ARSubsystems;
using System;

public class ARPlaceOnPlane : MonoBehaviour
{
    public ARRaycastManager arRaycaster;
    public GameObject placeObject; /*º½*/
    public GameObject placeObject1; /*¿©¸§*/
    public GameObject placeObject2; /*°¡À»*/
    public GameObject placeObject3; /*°Ü¿ï*/


    GameObject spawnObject;

    // Start is called before the first frame update
    void Start()
    {

    }

    // Update is called once per frame
    void Update()
    {
        PlaceObjectByTouch();
        // UpdateCenterObject();
    }

    private void PlaceObjectByTouch()
    {
        if (Input.touchCount > 0)
        {
           
            Touch touch = Input.GetTouch(0);
            List<ARRaycastHit> hits = new List<ARRaycastHit>();
            if (arRaycaster.Raycast(touch.position, hits, TrackableType.Planes))
            {
                Pose hitPose = hits[0].pose;

                if (!spawnObject)
                {
                    if (DateTime.Now.ToString("MM") == "03" && DateTime.Now.ToString("MM") == "04" && DateTime.Now.ToString("MM") == "05")
                        spawnObject = Instantiate(placeObject, hitPose.position, hitPose.rotation);
                    else if (DateTime.Now.ToString("MM") == "06" && DateTime.Now.ToString("MM") == "07" && DateTime.Now.ToString("MM") == "08")
                        spawnObject = Instantiate(placeObject1, hitPose.position, hitPose.rotation);
                    else if (DateTime.Now.ToString("MM") == "09" && DateTime.Now.ToString("MM") == "10")
                        spawnObject = Instantiate(placeObject2, hitPose.position, hitPose.rotation);
                    else
                        spawnObject = Instantiate(placeObject3, hitPose.position, hitPose.rotation);
                    //plane.gameObject.SetActive(false);
                }
                else
                {
                    /*if (DateTime.Now.ToString("MM") == "04")
                        today3.text = DateTime.Now.ToString("MM¿ù");
                    else
                        today3.text = DateTime.Now.ToString("MMÈþ");*/
                    /*spawnObject.transform.position = hitPose.position;
                    spawnObject.transform.rotation = hitPose.rotation;*/

                }
            }
        }

    }

    private void UpdateCenterObject()
    {
        Vector3 screenCenter = Camera.current.ViewportToScreenPoint(new Vector3(0.5f, 0.5f));

        List<ARRaycastHit> hits = new List<ARRaycastHit>();
        arRaycaster.Raycast(screenCenter, hits, TrackableType.Planes);

        if (hits.Count > 0)
        {
            Pose placementPose = hits[0].pose;
            placeObject.SetActive(true);
            placeObject.transform.SetPositionAndRotation(placementPose.position, placementPose.rotation);
        }
        else
        {
            placeObject.SetActive(false);
        }
    }
}
