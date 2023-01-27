import { Fragment } from "react";

function Footer() {
  return (
    <Fragment>
      <div className="w-full bg-slate-900  bottom-0">
        <div className="container mx-auto">
          {/* copyright */}
          <div className="flex justify-center items-center py-4">
            <div className="text-sm text-gray-500 lg:text-lg">
              © 2023 - All Rights Reserved | komar.izmi
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
export default Footer;
