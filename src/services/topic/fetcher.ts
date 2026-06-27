import { AxiosError } from "axios";
import { Endpoints } from "../../api/endpoints";
import { Api } from "../../api/axios";

interface IResponseTopic {
  name: string;
  count: number;
  id: number;
}

export const getSingleTopic = async (id: string | undefined) => {
  try {
    const getData = await Api.get<IResponseTopic[]>(
      `${Endpoints.GET_ALL_TOPICS}?id=${id}`,
    );

    return getData.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error.message);
    }
  }
};
