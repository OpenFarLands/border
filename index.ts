import { Vec3 } from "bdsx/bds/blockpos";
import { MinecraftPacketIds } from "bdsx/bds/packetids";
import { events } from "bdsx/event";
const border = 500000;

events.packetBefore(MinecraftPacketIds.PlayerAuthInput).on((packet, netId, packetId) => {
    const pl = netId.getActor()!;
    const pos = packet.pos;
    const viewVec = pl.getViewVector();
    if (pos.x > border || pos.x < border * -1 || pos.z > border || pos.z < border * -1) {
        const tpPos = Vec3.allocate();

        if (pos.x > border && pos.z > border) {
            tpPos.x = border - 10;
            tpPos.y = pos.y;
            tpPos.z = border - 10;

            pl.sendTip("World Border");
            pl.teleport(tpPos, pl.getDimensionId(), viewVec);
        } else if (pos.x < border * -1 && pos.z < border * -1) {
            tpPos.x = border * -1 + 10;
            tpPos.y = pos.y;
            tpPos.z = border * -1 + 10;

            pl.sendTip("World Border");
            pl.teleport(tpPos, pl.getDimensionId(), viewVec);
        } else if (pos.x < border * -1 && pos.z > border) {
            tpPos.x = border * -1 + 10;
            tpPos.y = pos.y;
            tpPos.z = border - 10;

            pl.sendTip("World Border");
            pl.teleport(tpPos, pl.getDimensionId(), viewVec);
        } else if (pos.x > border && pos.z < border * -1) {
            tpPos.x = border - 10;
            tpPos.y = pos.y;
            tpPos.z = border * -1 + 10;

            pl.sendTip("World Border");
            pl.teleport(tpPos, pl.getDimensionId(), viewVec);
        } else if (pos.x > border) {
            tpPos.x = border - 10;
            tpPos.y = pos.y;
            tpPos.z = pos.z;

            pl.sendTip("World Border");
            pl.teleport(tpPos, pl.getDimensionId(), viewVec);
        } else if (pos.x < border * -1) {
            tpPos.x = border * -1 + 10;
            tpPos.y = pos.y;
            tpPos.z = pos.z;

            pl.sendTip("World Border");
            pl.teleport(tpPos, pl.getDimensionId(), viewVec);
        } else if (pos.z > border) {
            tpPos.x = pos.x;
            tpPos.y = pos.y;
            tpPos.z = border - 10;

            pl.sendTip("World Border");
            pl.teleport(tpPos, pl.getDimensionId(), viewVec);
        } else if (pos.z < border * -1) {
            tpPos.x = pos.x;
            tpPos.y = pos.y;
            tpPos.z = border * -1 + 10;

            pl.sendTip("World Border");
            pl.teleport(tpPos, pl.getDimensionId(), viewVec);
        }
    }
});
