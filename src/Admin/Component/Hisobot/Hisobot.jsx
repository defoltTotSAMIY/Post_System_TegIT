import { memo } from "react";
import Table from "../Table/Table"
function Hisobot() {

  const column = ['id', 'Turi', 'Kuni', 'Soati', 'Kassir', 'Soani', 'Narxi',""];
  return (
    <div className="">
        <h2 className="text-white">Kassa hisoboti</h2>
        <div className="container-fluid bg-info">
          <div className="row">
              <div className="col-3">
                Salom
              </div>
              <div className="col-9">
                <Table
                column={column}
                data="salom"/>
              </div>
          </div>
        </div>
    </div>
  );
}

export default memo(Hisobot);
