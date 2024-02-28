function Project() {
  return (
    <div id="project">
      <p className="font-bold text-4xl p-5 mt-[100px]">Projects</p>
      <div
        data-aos="zoom-in-up"
        data-aos-duration="600"
        data-aos-easing="linear"
        className="w-[50%] shadow-2xl p-5 rounded-xl"
      >
        <h2 className="font-medium text-sm p-5">Customer Care Registry in IBM cloud</h2>
        <p className="text-gray-500 ml-5 leading-[25px] text-sm font-light">
          The Customer Care Registery in IBM Cloud is a project that aims to use artificial intelligence (AI) to improve customer service. The project uses a variety of Al techniques, such as natural language processing and machine learning, to automate customer service tasks, such as answering questions, issues, and providing recommendations. The project is still in development, but it has the potential to revolutionize customer service by making it more efficient, personalized, and effective.
        </p>
      </div>
      <br />
      <div
        data-aos="zoom-in-up"
        data-aos-duration="600"
        data-aos-easing="linear"
        className="flex justify-end mr-5"
      >
        <div className="w-[50%] shadow-2xl p-5 rounded-xl">
          
          <h2 className="font-medium text-sm p-5">Detection of Robust image Tampering aganiist OSN</h2>
          <p className="text-gray-500 ml-5 leading-[25px] text-sm font-light">
            The project of detecting robust image tampering against transmission over OSN aims to develop a method to detect images that have been tampered with after being transmitted over online social networks (OSNs). OSNs often use lossy compression and other image processing operations, which can make it difficult to detect forgeries. The proposed method addresses this challenge by decoupling the noise introduced by OSNs into two parts: predictable noise and unseen noise. The predictable noise is modeled using a deep neural network, while the unseen noise is using a statistical approach. The two models are then combined to train a robust image forgery detector.
          </p>
        </div>
      </div>
      <br />
      <div
        data-aos="zoom-in-up"
        data-aos-duration="600"
        data-aos-easing="linear"
        className="w-[50%] shadow-2xl p-5 rounded-xl"
      >
        <h2 className="font-medium text-sm p-5">Recognition of Cardiovascular disease in ECG image using CNN</h2>
        <p className="text-gray-500 ml-5 leading-[25px] text-sm font-light">
          Cardiovascular diseases (CVDs) are a leading cause of death and electrocardiogram (ECG) is a widely used diagnostic tool for CVDs. However, interpreting ECG images can be a challenging task due to the complexity of the signal and the need for expert knowledge. To address this challenge, a CNN (Convolutional Neural Network) model can be used to automatically recognize CVDs in ECG images. CNNs are a type of deep learning neural network that can learn and extract features from the input data, in this case, ECG images.
          Overall, using a CNN model for recognizing CVDs in ECG images can improve the accuracy and efficiency of CVD diagnosis, potentially leading to earlier detection and better treatment outcomes.
        </p>
      </div>
    </div>
  );
}

export default Project;
