import { AxiosError } from "axios";
import { Endpoints } from "../../api/endpoints";
import { Api } from "../../api/axios";

interface IResponseTrendingTopics {
  name: string;
  color: string;
  count: number;
}

export const getTrendingTopics = async () => {
  try {
    const getData = await Api.get<IResponseTrendingTopics[]>(
      Endpoints.GET_TRENDING_TOPICS,
    );
    
    return getData.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error.message);
    }
  }
};
