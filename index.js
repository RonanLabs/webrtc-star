import { sigServer } from "@libp2p/webrtc-star-signalling-server";

const main = async () => {
  const server = await sigServer({
    port: 24642,
    host: "0.0.0.0",
    metrics: false,
  });
};

main().catch((err) => console.log(err));
