import bakeryModel from "../MODEL/BakeryModel";
import express, { Request, Response } from "express";

//the general get method

const getAll = async (req: Request, res: Response): Promise<Response> => {
  try {
    const getting = await bakeryModel.find();
    return res.status(200).json({
      message: "all data gotten successfully",
      data: getting,
    });
  } catch (error) {
    return res.status(400).json({
      message: "an error occurred while trying to get the data",
      data: error,
    });
  }
};

const getOne = async (req: Request, res: Response): Promise<Response> => {
  try {
    const one = await bakeryModel.findById(req.params.id);

    return res.status(200).json({
      message: " single data gotten successfully",
      data: one,
    });
  } catch (error) {
    return res.status(400).json({
      message: "an error occurred while trying to get one data",
      data: error,
    });
  }
};

const post = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { name, address, contact, snacks, deliveryTruck } = req.body;

    const newOne = await bakeryModel.create({
      name,
      address,
      contact,
      snacks,
      deliveryTruck,
      uniqueCode: `${name.split(" ")[0]}_${Math.floor(Math.random() * 1000)}`,
    });
    console.log(newOne);

    return res.status(201).json({
      message: "data successfully added",
      data: newOne,
    });
  } catch (error) {
    return res.status(400).json({
      message: "an error occurred while trying to post the data",
      data: error,
    });
  }
};

export { getAll, getOne, post };
