const domain = "portal.interspace.chat";

export const JitsiInstances = [
  "parallel-society",
  "cryptoeconomics-lab",
  "metatrack"
];

export const RoomURLs = {
  "parallel-society": {
    jitsi: {
      domain,
      roomName: "parallel-society"
    },
    mozillaHub: {
      externalUrl: "https://hubs.mozilla.com/nKCuNrg/house-of-defiance"
    },
    youtube: {
      videoId: "pLq2xC_wGMg",
      externalUrl: "https://youtu.be/X5k8Cbr0d44"
    }
  },
  "cryptoeconomics-lab": {
    jitsi: {
      domain,
      roomName: "cryptoeconomics-lab"
    },
    mozillaHub: {
      externalUrl: "https://hubs.mozilla.com/nKCuNrg/house-of-defiance"
    },
    youtube: {
      videoId: "X5k8Cbr0d44",
      externalUrl: "https://youtu.be/X5k8Cbr0d44"
    }
  },
  metatrack: {
    jitsi: {
      domain,
      roomName: "metatrack"
    },
    mozillaHub: {
      externalUrl: "https://hubs.mozilla.com/nKCuNrg/house-of-defiance"
    },
    youtube: {
      videoId: "X5k8Cbr0d44",
      externalUrl: "https://youtu.be/X5k8Cbr0d44"
    }
  }
};

export const RoomNames = Object.keys(RoomURLs);
