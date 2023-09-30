const tattoosData = require('../data-access/tattoos.data');

exports.showTattoos = async () => {
  return await tattoosData.findAll();
};

exports.createTattoo = async (tattooInfo) => {
  const {nombre, descripcion, tamano, color, tecnica, autor, imagen} = tattooInfo;
  const tattooExists = await tattoosData.findOneResult({nombre: nombre});
  if (tattooExists) {
    return {error: 'Ya existe ese tatuaje'};
  }
  const createTattoo = await tattoosData.insertOne(tattooInfo);
  if (!createTattoo) {
    return {error: 'No se creó el tatuaje'};
  } else {
    return {success: 'Se creó el tatuaje exitosamente'};
  }
};

exports.updateTattoo = async (infoUpdate) => {
  const {nombre, descripcion, tamano, color, tecnica, autor, imagen} = infoUpdate;
  const infoToUpdate = {
    nombre: nombre,
    descripcion: descripcion,
    tamano: tamano,
    color: color,
    tecnica: tecnica,
    autor: autor,
    imagen: imagen,
  };
  const tattooUpdated = await tattoosData.updateOne({nombre: nombre}, infoToUpdate);
  if (tattooUpdated) {
    return {success: 'Actualizado correctamente'};
  } else {
    return {error: 'No se actualizo'};
  }
};

exports.deleteTattoo = async (id) =>{
  const tattooDeleted = await tattoosData.deleteOne(id);
  if (tattooDeleted) {
    return {success: 'Se eliminó'};
  } else {
    return {error: 'Error al eliminar'};
  }
};
