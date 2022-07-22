import React, { useEffect, useState } from "react";
import RegisterService from "../../services/register.services";

function AllRegister() {
  const [registers, setRegisters] = useState([]); // array de registros
  function getRegisters() {
    new RegisterService().getAll().then((res) => {
      if (res) setRegisters(res.data);
    }
    );
  }
  useEffect(() => {
    getRegisters();
  }, [getRegisters]);
  if (registers.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <thead>
        <tr>
          {Object.keys(registers[0]).map((title, index) => (
            <th key={ index }>
              {title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {
          registers.map((register, index) => (
            <tr key={ index }>
              {Object.values(register).map((value, index) => (
                <td key={ index }>
                  {value}
                </td>
              ))}
            </tr>
          ))
        }
      </tbody>
    </div>
  );
}

export default AllRegister;
