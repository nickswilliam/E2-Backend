import { Request, Response } from "express";

import Cost, { ICosts } from "../models/costs";

export const createUser = async (req: Request, res: Response) => {
  const userData: ICosts = req.body;

  const { dni, usuario, gasto } = userData;

  if (!dni || !usuario || !gasto) {
    res.status(400).json({
      message: "Faltan datos necesarios en la petición",
    });
    return;
  }

  const userDB = await Cost.findOne({ dni: dni });

  if (userDB) {
    res.json({
      message: "El usuario ingresado, ya existe en la base de datos",
    });
    return;
  }

  const user = new Cost({
    dni,
    usuario,
    gasto,
  });

  await user.save();

  res.status(201).json({
    message: "Usuario creado exitosamente",
    user,
  });
};

export const getUsers = async ({}, res: Response) => {
  const condition = { estado: true };

  const users: ICosts[] = await Cost.find(condition);

  res.status(200).json({
    message: "Usuarios en la base de datos",
    users,
  });
};

export const getUsersByDni = async (req: Request, res: Response) => {
  const { dni } = req.params;

  const user: ICosts | null = await Cost.findOne({dni: dni});

  if(!user){
    res.status(400).json({
        message: 'Usuario ingresado, no encontrado',
        error: 'Error al buscar un usuario, intente nuevamente.'
    })
    return;
  }

  res.json({
    message: "Usuario encontrado",
    user
  })
};
