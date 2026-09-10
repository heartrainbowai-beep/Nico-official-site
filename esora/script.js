(function () {
  var blockedMessage = "画像・イラスト・立ち絵の無断保存 転載 加工 再配布 学習利用は禁止です";

  document.addEventListener("contextmenu", function (event) {
    if (event.target && event.target.closest && event.target.closest(".saveable-image, .downloadable-image")) {
      return;
    }
    event.preventDefault();
  });

  document.addEventListener("dragstart", function (event) {
    if (event.target && event.target.tagName === "IMG" && !event.target.classList.contains("saveable-image")) {
      event.preventDefault();
    }
  });

  document.querySelectorAll("img").forEach(function (img) {
    if (img.classList.contains("saveable-image")) {
      img.setAttribute("draggable", "true");
      return;
    }
    img.setAttribute("draggable", "false");
    img.addEventListener("touchstart", function () {}, { passive: true });
  });

  var imageLinkPattern = /\.(png|jpe?g|webp)(?:[?#].*)?$/i;
  var isRestrictedInAppBrowser = /Twitter|X-Twitter|Line|Instagram|FBAN|FBAV|FB_IAB/i.test(
    window.navigator.userAgent || ""
  );

  document.querySelectorAll(".downloadable-image[href]").forEach(function (link) {
    var href = link.getAttribute("href") || "";
    if (!imageLinkPattern.test(href)) {
      return;
    }

    if (link.hasAttribute("download")) {
      link.dataset.downloadName = link.getAttribute("download") || "";
      link.removeAttribute("download");
    }
    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "noopener");
  });

  document.querySelectorAll(".download-link[href]").forEach(function (link) {
    var href = link.getAttribute("href") || "";
    if (!imageLinkPattern.test(href) || link.closest(".download-actions")) {
      return;
    }

    var actions = document.createElement("div");
    actions.className = "download-actions";
    link.parentNode.insertBefore(actions, link);
    actions.appendChild(link);

    if (isRestrictedInAppBrowser) {
      link.removeAttribute("download");
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "noopener");
      link.textContent = "画像を開く";
      link.classList.add("download-link-open");
      return;
    }

    var openLink = document.createElement("a");
    openLink.className = "download-link download-link-open";
    openLink.href = href;
    openLink.target = "_blank";
    openLink.rel = "noopener";
    openLink.textContent = "画像を開く";
    openLink.setAttribute("aria-label", (link.getAttribute("aria-label") || link.textContent || "画像").replace("保存", "開く"));
    actions.appendChild(openLink);
  });

  document.querySelectorAll(".menu-toggle").forEach(function (button) {
    var menu = document.getElementById(button.getAttribute("aria-controls"));
    button.addEventListener("click", function () {
      var open = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", String(!open));
      menu.classList.toggle("is-open", !open);
    });
  });

  document.querySelectorAll(".shortcut-menu a").forEach(function (link) {
    link.addEventListener("click", function () {
      var button = document.querySelector(".menu-toggle");
      var menu = document.getElementById("shortcut-menu");
      if (button && menu) {
        button.setAttribute("aria-expanded", "false");
        menu.classList.remove("is-open");
      }
    });
  });

  document.querySelectorAll('a[href="#"]').forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      alert("ローカル見本です\n公開用URLは虹心確認後に設定します");
    });
  });

  window.__esoraRainbowProtectionNotice = blockedMessage;
})();
