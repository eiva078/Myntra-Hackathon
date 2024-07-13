import React, { useState, useReducer, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ModelViewer from "../ModelViewer/ModelViewer";
import Recommendation from "../Recommendation/Recommendation";
import styles from "./ModelViewerPage.module.css";

const initialState = {
  selectedAvatarPath: "",
  recommendations: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_AVATAR":
      return { ...state, selectedAvatarPath: action.payload };
    default:
      return state;
  }
};

const ModelViewerPage = () => {
  const location = useLocation();
  const [recommendationItems, setRecommendationItems] = useState([]);
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (location.state?.selectedAvatar) {
      dispatch({
        type: "SET_AVATAR",
        payload: location.state.selectedAvatar.imgPath,
      });
    }
  }, [location.state?.selectedAvatar]);

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/avatars");
        const data = await response.json();
        // Filter out the cloth and get only two at the recommendations
        const filteredRecommendations = data
          .filter((item) => item.imgPath !== state.selectedAvatarPath)
          .slice(0, 2);
        setRecommendationItems(filteredRecommendations);
      } catch (error) {
        console.error("Error fetching recommendations:", error);
      }
    };

    fetchRecommendations();
  }, [state.selectedAvatarPath]);

  const handleTryOn = (item) => {
    dispatch({
      type: "SET_AVATAR",
      payload: item.imgPath,
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftPanel}>
        <ModelViewer avatarPath={state.selectedAvatarPath} />
      </div>
      <div className={styles.rightPanel}>
        <Recommendation items={recommendationItems} onTryOn={handleTryOn} />
      </div>
    </div>
  );
};

export default ModelViewerPage;
