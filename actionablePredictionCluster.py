
# Requires BigML Python bindings
#
# Install via: pip install bigml
#
# or clone it:
#   git clone https://github.com/bigmlcom/python.git

from bigml.cluster import Cluster
from bigml.api import BigML

# Downloads and generates a local version of the cluster, if it
# hasn't been downloaded previously.

cluster = Cluster('cluster/5ce1e2e3eba31d4996000357',
                  api=BigML("chiniczrebeca",
                            "ae5088ea861a9a0adc3fce532149fe44d908a68d",
                            domain="bigml.io"))

# To predict centroids fill the desired input_data
# in next line. Numeric fields are compulsory.
input_data = {
    "PDIABETESTYPE": 1,
    "PBMI": 1,
    "HOURSWITHPROBLEM": 1,
    "PAGE": 1,
    "PWEIGHT": 1}
cluster.centroid(input_data)

# The result is a dict with three keys: distance, centroid_name and
# centroid_id
