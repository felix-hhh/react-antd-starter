import { SearchModel } from "#/entity.ts";
import moment from "moment";

const useUtils = () => {

  /**
   * 创建检索条件
   * @param searchItem
   * @param pageSize
   * @param page
   * @param sort
   * @param dir
   */
  const createSearchModel = (searchItem?, pageSize: number = 20, page: number = 1, sort?: string, dir: string = "descending") => {
    const searchModel: SearchModel = {
      limit: pageSize,
      page: page,
      data: {},
      sort: sort,
      dir: dir === "descending" ? "DESC" : "ASC",
    };
    /*searchItem.value.forEach(item => {
      if (item.value !== undefined) {
        const value = typeof item.value === "string" ? `"${item.value}"` : item.value;
        const text = `{"${item.key}":${value}}`;
        searchModel.data = JSON.parse(text);
      }
    });*/
    return searchModel;
  };

  /**
   * 格式化时间
   * @param data 原始数据
   */
  const datetimeFormat = (data:number) => {
    let date = data;
    if (date === undefined || date == null) {
      return "";
    }
    if (date.toString().length === 10) {
      date = date * 1000;
    }
    return moment(date).utc(true).format("YYYY-MM-DD HH:mm:ss");
  };

  return { createSearchModel,datetimeFormat };
};
export default useUtils;