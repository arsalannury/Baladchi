import { AxiosError } from "axios";
import { Endpoints } from "../../api/endpoints";
import { Api } from "../../api/axios";

interface IResponseTopics {
  name: string;
  count: number;
  id: number;
}

export const getAllTopics = async () => {
  try {
    const getData = await Api.get<IResponseTopics[]>(Endpoints.GET_ALL_TOPICS);

    return getData.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error.message);
    }
  }
};
