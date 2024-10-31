/* eslint-disable react/react-in-jsx-scope */
import LaunchOutlinedIcon from "@mui/icons-material/LaunchOutlined";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";

export default function Card() {
  return (
    <>
      <div className="overflow-x-auto lg:flex lg:flex-col items-center bg-base py-16">
        <div className="lg:w-1/2 xs:w-full py-5">
          <AddBoxOutlinedIcon style={{ color: "#cdd6f4" }} fontSize="large" />
          <div className="px-6">
            <div className="font-bold text-2xl text-text">Add Items</div>

            <div className="w-full bg-text rounded-md my-5 h-24 pt-4 px-5">
              <div className="flex flex-row">
                <div className="w-5/12">
                  <div className="font-sans text-lg text-crust">Key</div>
                  <div className="font-sans text-lg text-crust">
                    <input
                      className="w-full bg-text border-l-4 border-black focus:outline-none h-8 px-3"
                      placeholder="Grapes"
                    />
                  </div>
                </div>
                <div className="w-6/12">
                  <div className="font-sans text-lg text-crust">Value</div>
                  <div className="font-sans text-lg text-crust">
                    <input
                      className="w-full bg-text border-l-4 border-black focus:outline-none h-8 px-3"
                      placeholder="0"
                    />
                  </div>
                </div>
                <div className="w-1/12 py-5">
                  <LaunchOutlinedIcon
                    style={{ color: "#11111b" }}
                    fontSize="large"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 xs:w-full py-5">
          <FormatListBulletedOutlinedIcon
            style={{ color: "#cdd6f4" }}
            fontSize="large"
          />
          <div className="px-6">
            <div className="font-bold text-2xl text-text">List Items</div>

            <div className="w-full rounded-md my-5 h-40">
              <div className="grid grid-cols-5 gap-4 justify-items-center align-middle">
                <div className="h-36 w-36 border-4 rounded-3xl text-center p-8 border-rosewater">
                  <div className="text-center text-text text-xl">Grapes</div>
                  <div className="text-center text-text text-3xl font-extrabold">10</div>
                </div>
                <div className="h-36 w-36 border-4 rounded-3xl text-center p-8 border-flamingo">
                  <div className="text-center text-text text-xl">Grapes</div>
                  <div className="text-center text-text text-3xl font-extrabold">10</div>
                </div>
                <div className="h-36 w-36 border-4 rounded-3xl text-center p-8 border-pink">
                  <div className="text-center text-text text-xl">Grapes</div>
                  <div className="text-center text-text text-3xl font-extrabold">10</div>
                </div>
                <div className="h-36 w-36 border-4 rounded-3xl text-center p-8 border-mauve">
                  <div className="text-center text-text text-xl">Grapes</div>
                  <div className="text-center text-text text-3xl font-extrabold">10</div>
                </div>
                <div className="h-36 w-36 border-4 rounded-3xl text-center p-8 border-red">
                  <div className="text-center text-text text-xl">Grapes</div>
                  <div className="text-center text-text text-3xl font-extrabold">10</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
