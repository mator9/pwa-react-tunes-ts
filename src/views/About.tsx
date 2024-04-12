import React, { useEffect } from "react";
import "./About.scss";

type Props = {};


const About = (props: Props) => {
  useEffect(() => {
    window.addEventListener("DOMContentLoaded", async (event) => {
      if ('BeforeInstallPromptEvent' in window) {
        showResult("⏳ BeforeInstallPromptEvent supported but not fired yet");
      } else {
        showResult("❌ BeforeInstallPromptEvent NOT supported");
      }
      document.querySelector("#install")?.addEventListener("click", installApp);
    });
    
    let deferredPrompt: any; // You may want to replace 'any' with the actual type of BeforeInstallPromptEvent
    
    window.addEventListener('beforeinstallprompt', (e: Event) => {
      // Prevents the default mini-infobar or install dialog from appearing on mobile
      e.preventDefault();
      // Save the event because you’ll need to trigger it later.
      deferredPrompt = e;
      // Show your customized install prompt for your PWA
      document.querySelector("#install")?.setAttribute("style", "display:block");
      showResult("✅ BeforeInstallPromptEvent fired", true);
    });
    
    window.addEventListener('appinstalled', (e: Event) => {
      showResult("✅ AppInstalled fired", true);
    });
    
    async function installApp() {
      if (deferredPrompt) {
        deferredPrompt.prompt();
        showResult("🆗 Installation Dialog opened");
        // Find out whether the user confirmed the installation or not
        const { outcome } = await deferredPrompt.userChoice;
        // The deferredPrompt can only be used once.
        deferredPrompt = null;
        // Act on the user's choice
        if (outcome === 'accepted') {
          showResult('😀 User accepted the install prompt.', true);
        } else if (outcome === 'dismissed') {
          showResult('😟 User dismissed the install prompt');
        }
        // We hide the install button
        document.querySelector("#install")?.setAttribute("style", "display:none");
      }
    }
    
    function showResult(text: string, append: boolean = false) {
      if (append) {
        const output = document.querySelector("output");
        if (output) {
          output.innerHTML += "<br>" + text;
        }
      } else {
        const output = document.querySelector("output");
        if (output) {
          output.innerHTML = text;
        }
      }
    }
    
  
  
  
    // // This variable will save the event for later use.
    // let deferredPrompt;
    // window.addEventListener("beforeinstallprompt", (e) => {
    //   // Prevents the default mini-infobar or install dialog from appearing on mobile
    //   e.preventDefault();
    //   // Save the event because you'll need to trigger it later.
    //   deferredPrompt = e;
    //   console.log("ran beforeinstallprompt");
    //   // Show your customized install prompt for your PWA
    //   // Your own UI doesn't have to be a single element, you
    //   // can have buttons in different locations, or wait to prompt
    //   // as part of a critical journey.
      // showInAppInstallPromotion();
    // });
  
    // if (inventoryId && inventoryId !== "") {
    //   restApi
    //     .predictCart(inventoryId)
    //     .then(() => {
    //       setIsBtnDisabled(false);
    //     })
    //     .catch((err) => console.log(err));
    // } else {
    //   console.warn("No inventoryId in storage, can't predict Cart");
    // }
  
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <output/>
      <h1>About</h1>
      <p>about my app react tunes2</p>
      <div className="mode fullscreen">
        You are using fullscreen.
      </div>
      <div className="mode minimal-ui">
        You are using minimal-ui.
      </div>
      <div className="mode window-controls-overlay">
        You are using window-controls-overlay.
      </div>
      <div className="mode browser-only">
        You are using browser.
      </div>
      <div className="mode standalone-only">
        You are using app.
      </div>
    </div>
  );
};

export default About;
