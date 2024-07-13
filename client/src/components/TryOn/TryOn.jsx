import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./TryOn.module.css";
import bodyType1 from "../../assets/TryOn/body_1.svg";
import bodyType2 from "../../assets/TryOn/body_2.svg";
import bodyType3 from "../../assets/TryOn/body_3.svg";
import bodyType4 from "../../assets/TryOn/body_4.svg";
import bodyType5 from "../../assets/TryOn/body_5.svg";
import bodyTypeMale1 from "../../assets/TryOn/1.svg";
import bodyTypeMale2 from "../../assets/TryOn/2.svg";
import bodyTypeMale3 from "../../assets/TryOn/3.svg";
import bodyTypeMale4 from "../../assets/TryOn/4.svg";
import bodyTypeMale5 from "../../assets/TryOn/5.svg";
import Recommendation from "../Recommendation/Recommendation";
import Loader from "../Loader/Loader";

const femaleBodyTypes = [
  { id: "slim", label: "Slim", icon: bodyType1 },
  { id: "average", label: "Average", icon: bodyType2 },
  { id: "athletic", label: "Athletic", icon: bodyType3 },
  { id: "curvy", label: "Curvy", icon: bodyType4 },
  { id: "plus", label: "Plus", icon: bodyType5 },
];

const maleBodyTypes = [
  { id: "slim", label: "Slim", icon: bodyTypeMale1 },
  { id: "average", label: "Average", icon: bodyTypeMale2 },
  { id: "athletic", label: "Athletic", icon: bodyTypeMale3 },
  { id: "muscular", label: "Muscular", icon: bodyTypeMale4 },
  { id: "plus", label: "Plus", icon: bodyTypeMale5 },
];

const occasions = [
  { id: "party", label: "Party" },
  { id: "formal", label: "Formal" },
  { id: "casual", label: "Casual" },
  { id: "ethnic", label: "Ethnic" },
];

const TryOn = () => {
  const [images, setImages] = useState([null, null, null]);
  const [gender, setGender] = useState("female");
  const [bodyType, setBodyType] = useState("");
  const [skinTone, setSkinTone] = useState(0);
  const [selectedOccasion, setSelectedOccasion] = useState("");
  const [recommendationItems, setRecommendationItems] = useState([]);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/avatars");
        const data = await response.json();
        console.log(data);
        setRecommendationItems(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching recommendations:", error);
        setLoading(false);
      }
    };

    if (formSubmitted) {
      setLoading(true);
      setTimeout(fetchRecommendations, 2000);
    }
  }, [formSubmitted]);

  const handleImageChange = (index, e) => {
    const newImages = [...images];
    newImages[index] = e.target.files[0];
    setImages(newImages);
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
    setBodyType("");
  };

  const handleBodyTypeChange = (type) => {
    setBodyType(type);
  };

  const handleSkinToneChange = (e) => {
    setSkinTone(e.target.value);
  };

  const handleOccasionChange = (e) => {
    setSelectedOccasion(e.target.value);
  };

  const handleTryOn = (item) => {
    navigate("/model", { state: { selectedAvatar: item } });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const bodyTypes = gender === "female" ? femaleBodyTypes : maleBodyTypes;

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.section}>
          <div className={styles.sectionTitle}>Upload Images</div>
          <div className={styles.imageUploadSection}>
            {images.map((image, index) => (
              <div key={index} className={styles.fileInputContainer}>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImageChange(index, e)}
                />
              </div>
            ))}
          </div>
        </div>

        <div className={styles.section}>
          <div className={styles.sectionTitle}>Gender</div>
          <div className={styles.genderSelection}>
            <label
              className={`${styles.genderOption} ${
                gender === "female" ? styles.selectedGender : ""
              }`}
            >
              Female
              <input
                type="radio"
                name="gender"
                value="female"
                checked={gender === "female"}
                onChange={handleGenderChange}
              />
            </label>
            <label
              className={`${styles.genderOption} ${
                gender === "male" ? styles.selectedGender : ""
              }`}
            >
              Male
              <input
                type="radio"
                name="gender"
                value="male"
                checked={gender === "male"}
                onChange={handleGenderChange}
              />
            </label>
          </div>
        </div>

        <div className={styles.section}>
          <div className={styles.sectionTitle}>Body Type</div>
          <div className={styles.bodyTypes}>
            {bodyTypes.map((type) => (
              <div
                key={type.id}
                className={`${styles.bodyType} ${
                  bodyType === type.id ? styles.selected : ""
                }`}
                onClick={() => handleBodyTypeChange(type.id)}
              >
                <img src={type.icon} alt={type.label} />
              </div>
            ))}
          </div>
        </div>

        <div className={styles.section}>
          <div className={styles.sectionTitle}>Skin Tone</div>
          <div className={styles.sliderContainer}>
            <label htmlFor="skinTone">Tone Correction</label>
            <input
              type="range"
              id="skinTone"
              min="-1"
              max="1"
              step="0.01"
              value={skinTone}
              onChange={handleSkinToneChange}
            />
            <span className={styles.toneValue}>{skinTone}</span>
          </div>
        </div>

        <div className={styles.section}>
          <div className={styles.sectionTitle}>Occasion</div>
          <div className={styles.genderSelection}>
            {occasions.map((occasion) => (
              <label
                key={occasion.id}
                className={`${styles.genderOption} ${
                  selectedOccasion === occasion.id ? styles.selectedGender : ""
                }`}
              >
                {occasion.label}
                <input
                  type="radio"
                  name="occasion"
                  value={occasion.id}
                  checked={selectedOccasion === occasion.id}
                  onChange={handleOccasionChange}
                />
              </label>
            ))}
          </div>
        </div>

        <button type="submit" className={styles.submitButton}>
          Submit
        </button>
      </form>

      {loading && <Loader />}

      {!loading && formSubmitted && recommendationItems.length > 0 && (
        <Recommendation items={recommendationItems} onTryOn={handleTryOn} />
      )}
    </div>
  );
};

export default TryOn;
