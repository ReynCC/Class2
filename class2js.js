class CEmpleado {
    constructor(Name, YearOfJoining, Address) {
        this.Name = Name;
        this.YearOfJoining = YearOfJoining;
        this.Address = Address;
    }
}

let empleado = new CEmpleado("Roberto", 2018, "57C- WallStreet");

document.write("<tr>");
document.write("<td>" + empleado.Name + "</td>");
document.write("<td>" + empleado.YearOfJoining + "</td>");
document.write("<td>" + empleado.Address + "</td>");
document.write("</tr>");