import { useState } from "react";
import lista_material from "../data/lista_material.json";
import ColumnFilter from "./ColumnFilter.tsx";

const Table = () => {
  const materiais = lista_material;

  const [filtros, setFiltros] = useState({
    codigo: "",
    nome: "",
    descricao: "",
    observacao: "",
  });

  const atualizarFiltro = (campo: keyof typeof filtros, valor: string) => {
    setFiltros((filtrosAnteriores) => ({
      ...filtrosAnteriores,
      [campo]: valor,
    }));
  };

  const materiaisFiltrados = materiais.filter((material) => {
    return (
      material.codigo.toLowerCase().includes(filtros.codigo.toLowerCase()) &&
      material.nome.toLowerCase().includes(filtros.nome.toLowerCase()) &&
      (material.descricao ?? "")
        .toLowerCase()
        .includes(filtros.descricao.toLowerCase()) &&
      (material.observacao ?? "")
        .toLowerCase()
        .includes(filtros.observacao.toLowerCase())
    );
  });

  return (
    <div className="flex flex-1 justify-center bg-[#333]">
      <table className="w-[1400px] table-fixed border-collapse">
        <thead className="sticky top-[-1px] z-10 border-t-2 border-[#1A85C8] bg-[#1A85C8] text-white">
          <tr>
            <th className="w-[130px] border border-[#1A85C8] p-2">
              <ColumnFilter
                label="Código"
                value={filtros.codigo}
                onChange={(valor) => atualizarFiltro("codigo", valor)}
              />
            </th>
            <th className="w-[240px] border border-[#1A85C8] p-2">
              <ColumnFilter
                label="Material"
                value={filtros.nome}
                onChange={(valor) => atualizarFiltro("nome", valor)}
              />
            </th>
            <th className="w-[540px] border border-[#1A85C8] p-2">
              <ColumnFilter
                label="Descrição"
                value={filtros.descricao}
                onChange={(valor) => atualizarFiltro("descricao", valor)}
              />
            </th>
            <th className="w-[350px] border border-[#1A85C8] p-2">
              <ColumnFilter
                label="Observação"
                value={filtros.observacao}
                onChange={(valor) => atualizarFiltro("observacao", valor)}
              />
            </th>
            <th className="w-[140px] border border-[#1A85C8] p-2">Imagem</th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {materiaisFiltrados.length > 0 ? (
            materiaisFiltrados.map((material) => (
              <tr key={material.codigo} className="hover:bg-[#c2ee8c]">
                <td className="border border-[#1A85C8] p-2 text-center">
                  {material.codigo}
                </td>

                <td className="border border-[#1A85C8] p-2 text-left">
                  {material.nome}
                </td>

                <td className="border border-[#1A85C8] p-2 text-left whitespace-pre-line">
                  {material.descricao.replaceAll(/;/g, "; \n")}
                </td>

                <td className="border border-[#1A85C8] p-2 text-left whitespace-pre-line">
                  {material.observacao
                    .split(";")
                    .filter((item) => item.trim() !== "")
                    .map((item) => `• ${item.trim()}`)
                    .join("\n")}
                </td>

                <td className="border border-[#1A85C8] p-2">
                  <img
                    src={`/img/${material.codigo}.png`}
                    alt="Imagem não disponível"
                    className="mx-auto h-[140px] w-[140px] object-contain"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = "/img/sem-imagem.png";
                    }}
                  />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5} className="p-4 text-center">
                Nenhum material encontrado.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
