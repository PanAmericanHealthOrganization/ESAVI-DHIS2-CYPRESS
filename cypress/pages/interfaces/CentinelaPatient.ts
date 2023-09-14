export interface ICentinelaPatient {
    fechaInscripcion: string;
    identificadorUnico: string;
    numeroIdentidad: string;
    nombres: string;
    apellidos: string;
    fechaNacimiento: string;
    sexo: string;
    municipio: string;
    direccion: string;
    correoElectronico: string;
    numeroTelefono: string;
}


export class CentinelaPatient implements ICentinelaPatient {
    fechaInscripcion: string;
    identificadorUnico: string;
    numeroIdentidad: string;
    nombres: string;
    apellidos: string;
    fechaNacimiento: string;
    sexo: string;
    municipio: string;
    direccion: string;
    correoElectronico: string;
    numeroTelefono: string;
}

export class CentinelaPatientBuilder extends CentinelaPatient {

    withFechaInscripcion(fechaInscripcion: string) {
        this.fechaInscripcion = fechaInscripcion;
        return this;
    }
    withIdentificadorUnico(identificadorUnico: string) {
        this.identificadorUnico = identificadorUnico;
        return this;
    }

    withNumeroIdentidad(numeroIdentidad: string) {
        this.numeroIdentidad = numeroIdentidad;
        return this;
    }

    withNombres(nombres: string) {
        this.nombres = nombres;
        return this;
    }
    withApellidos(apellidos: string) {
        this.apellidos = apellidos;
        return this;
    }
    withFechaNacimiento(fechaNacimiento: string) {
        this.fechaNacimiento = fechaNacimiento;
        return this;
    }
    withSexo(sexo: string) {
        this.sexo = sexo;
        return this;
    }
    withMunicipio(municipio: string) {
        this.municipio = municipio;
        return this;
    }
    withDireccion(direccion: string) {
        this.direccion = direccion;
        return this;
    }
    withCorreoElectronico(correoElectronico: string) {
        this.correoElectronico = correoElectronico;
        return this;
    }
    withNumeroTelefono(numeroTelefono: string) {
        this.numeroTelefono = numeroTelefono;
        return this;
    }

    build() {
        return this;
    }
}


const oCentinela = new CentinelaPatientBuilder().withFechaInscripcion('2020-04-01').build();
console.log(oCentinela);