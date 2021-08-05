(ns quotebook.core
    (:require ))

(enable-console-print!)

(println "This text is printed from src/quotebook/core.cljs. Go ahead and edit it and see reloading in action.")

;; define your app data so that it doesn't get over-written on reload

(defonce app-state (atom {:text "Hello world!"}))


(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)

(def themes-mapping {"Botanic Leaves" {:file "css/themes/botanic-leaves.css"}
                     "Smithsonian Backswatter" {:file "css/themes/smithsonian-backswatter.css"}})

(defn switchTheme [url]
  (if (and js/document
           (.-getElementById js/document))
    (let [theme-style (.getElementById js/document "theme-style")]
      (set! (.-href theme-style) url))
    (println "Error switching theme"))
  false)

(defn bindSwitchTheme []
  (if (and js/document
           (.-getElementById js/document))
    (let [select (.getElementById js/document "theme-select")]
      (println (.-value select))
      (set! (.-onchange select)
            (fn []
              (switchTheme
               (:file (get themes-mapping (.-value select)))))))
    (println "error")))

(defn init []
  (bindSwitchTheme))

(init)
