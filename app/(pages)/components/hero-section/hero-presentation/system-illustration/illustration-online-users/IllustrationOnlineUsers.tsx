import { avatars } from "./IllustrationOnlineUsers.utils";

export function IllustrationOnlineUsers() {
  return (
    <div className="absolute flex items-center gap-[16px] rounded-[14px] w-[192px] h-[62px] bg-[#292929] border-[1px] border-[#ffffff60] pl-[17px] bottom-[-28px] left-[-30px]">
      <div className="flex -space-x-2 overflow-hidden">
        {avatars.map((avatar) => (
          <img
            key={avatar}
            src={avatar}
            alt=""
            className="inline-block size-8 rounded-full ring-2 ring-gray-900 outline -outline-offset-1 outline-white/10"
          />
        ))}
      </div>

      <p className="text-[10px] font-bold">+12 Online</p>
    </div>
  );
}
