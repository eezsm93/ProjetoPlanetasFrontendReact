import React from "react";
import Login from "../pages/Login";
import MyPoint from "../pages/MyPoint";
import CreateNewUser from "../pages/Users/CreateNewUser";
import ListUser from "../pages/Users/ListUser";
import CompaniesList from "../pages/Company/CompaniesList";
import AddEditCompany from "../pages/Company/AddEditCompany";
import ListTeam from "../pages/Team/ListTeam";
import CreateEditTeam from "../pages/Team/CreateEditTeam";
import CreateUpdateCostCenter from "../pages/CostCenter/CreateUpdateCostCenter";
import ListCostCenters from "../pages/CostCenter/ListCostCenters";

export const routes = [
  {
    path: "/",
    element: <Login />,
    accessType: "",
    private: false,
    key: 1,
  },
  {
    path: "/meuponto",
    element: <MyPoint />,
    accessType: ["collaborator", "administrator"],
    private: true,
    key: 2,
  },
  {
    path: "/cadastroUsuario",
    element: <CreateNewUser />,
    accessType: ["collaborator", "administrator"],
    private: true,
    key: 3,
  },
  {
    path: "/listarUsuarios",
    element: <ListUser />,
    accessType: ["collaborator", "administrator"],
    private: true,
    key: 4,
  },
  {
    path: "/editarUsuario/:id",
    element: <CreateNewUser />,
    accessType: ["collaborator", "administrator"],
    private: true,
    key: 5,
  },
  {
    path: "/listarEmpresas",
    element: <CompaniesList />,
    accessType: ["collaborator", "administrator"],
    private: true,
    key: 6,
  },
  {
    path: "/cadastroEmpresa",
    element: <AddEditCompany />,
    accessType: ["collaborator", "administrator"],
    private: true,
    key: 7,
  },
  {
    path: "/editarEmpresa/:id",
    element: <AddEditCompany />,
    accessType: ["collaborator", "administrator"],
    private: true,
    key: 8,
  },
  {
    path: "/listarEquipes",
    element: <ListTeam />,
    accessType: ["collaborator", "administrator"],
    private: true,
    key: 9,
  },
  {
    path: "/cadastroEquipe",
    element: <CreateEditTeam />,
    accessType: ["collaborator", "administrator"],
    private: true,
    key: 10,
  },
  {
    path: "/editarEquipe/:id",
    element: <CreateEditTeam />,
    accessType: ["collaborator", "administrator"],
    private: true,
    key: 11,
  },
  {
    path: "/cadastroCentroCusto",
    element: <CreateUpdateCostCenter />,
    accessType: ["collaborator", "administrator"],
    private: true,
    key: 12,
  },
  {
    path: "/editarCentroCusto/:id",
    element: <CreateUpdateCostCenter />,
    accessType: ["collaborator", "administrator"],
    private: true,
    key: 13,
  },
  {
    path: "/listarCentroCusto",
    element: <ListCostCenters />,
    accessType: ["collaborator", "administrator"],
    private: true,
    key: 14,
  },
];

export default routes;
