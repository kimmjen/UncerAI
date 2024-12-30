from model.pomdp import POMDPModel


class POMDPService:
    def __init__(self, model=None):
        """
        Initialize the POMDPService with a model instance.
        :param model: An instance of POMDPModel
        """
        self.model = model or POMDPModel()

    def get_solution(self):
        """
        Fetch the POMDP solution from the model and format it for the response.
        :return: A dictionary containing belief state and optimal action
        """
        result = self.model.fetch_solution()

        # Validate the model output and ensure it matches the schema
        if not result:
            return {
                "belief_state": {"state_probabilities": {}},
                "optimal_action": ""
            }

        return {
            "belief_state": result["belief_state"],
            "optimal_action": result["optimal_action"]
        }
